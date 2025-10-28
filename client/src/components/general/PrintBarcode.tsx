import { useRef, useEffect, PropsWithChildren } from 'react';
import type { FC } from 'react';

export const PrintBarcode: FC<PropsWithChildren> = ({ children }) => {
  const barcodeRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const loadAndPrint = async () => {
      const iframe = iframeRef.current;
      if (iframe) {
        const pri = iframe.contentWindow;
        if (pri && barcodeRef.current) {
          pri.document.open();
          pri.document.write(`
          <html>
            <head>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
              <style>
                html,
                body {
                  width: 100%;
                  height: 100%;
                  margin: 0px;
                  padding: 0px;
                  border: none;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  overflow: hidden;
                }
              </style>
            </head>
            <body>
              ${barcodeRef.current.innerHTML}
            </body>
          </html>
          `);
          pri.document.close();

          // Ensure styles are loaded before printing
          await new Promise<void>((resolve) => {
            const link = pri.document.querySelector('link');
            if (link) {
              // eslint-disable-next-line unicorn/prefer-add-event-listener
              link.onload = () => resolve();
            } else {
              resolve();
            }
          });

          pri.focus();
          pri.print();
        }
      }
    };

    loadAndPrint();

    return () => {
      // Clean up the iframe after printing
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const iframe = iframeRef.current;
      if (iframe?.parentNode) {
        iframe.remove();
      }
    };
  }, []);

  return (
    <div>
      <iframe ref={iframeRef} style={{ display: 'none' }} />
      <div ref={barcodeRef}>
        <div className="absolute top-0 -z-50 flex flex-col content-center items-center self-center">{children}</div>
      </div>
    </div>
  );
};
