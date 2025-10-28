import { FC, ReactNode } from 'react';

import { Alert, Button, Result, Typography } from 'antd';
import type { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';


export const ErrorBoundaryFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center">
      <Result
        status="500"
        title="An unexpected error occurred"
        subTitle={error.message}
        extra={[
          <Button
            key="to-home"
            type="primary"
            onClick={() => {
              resetErrorBoundary();
              navigate("/dashboard");
            }}
          >
            Go back to homepage
          </Button>,
          <Button
            key="report"
            type="link"
            href={`
                mailto:oksana.tsurkan@claneo.com
                ?subject=SEO Management Tool - Unexpected error
                &body=
                    Error name: ${error.name}
                    <br /><br />
                    Error message: ${error.message}
                    <br /><br />
                    Error stack:
                    <br />
                    ${error?.stack?.split('\n').join('<br />') ?? 'Unknown'}
            `}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact support
          </Button>,
        ]}
      >
        <Alert.ErrorBoundary>
          <div className="flex flex-col items-center justify-center">
            <Typography.Title level={4}>Full error stack</Typography.Title>
            <div>{error?.stack.split('\n').map((line: ReactNode, index: number) => <p key={index}>{line}</p>)}</div>
          </div>
        </Alert.ErrorBoundary>
      </Result>
    </div>
  );
};
