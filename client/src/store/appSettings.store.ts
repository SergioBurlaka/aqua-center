import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type PrintWithoutPreviewType = {
  isPrintWithoutPreview: boolean;
  setIsPrintWithoutPreview: (isPrintWithoutPreview: boolean) => void;
};

export const usePrintWithoutPreviewStore = create<PrintWithoutPreviewType>()(
  devtools(
    persist(
      (set) => ({
        isPrintWithoutPreview: false,
        setIsPrintWithoutPreview: (isPrintWithoutPreview) => {
          set({ isPrintWithoutPreview });
        },
      }),
      { name: 'AppSettings' },
    ),
  ),
);
