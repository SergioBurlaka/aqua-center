import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type WorkLogStatus = 0 | 1 | 2;

type WorkLogStoreType = {
  workLogStatus: WorkLogStatus;
  setWorkLogStatus: (workLogStatus: WorkLogStatus) => void;
  autoClockOut: boolean;
  setAutoClockOut: (autoClockOut: boolean) => void;
};

export const useWorkLogStore = create<WorkLogStoreType>()(
  devtools( 
    persist(
      (set) => ({
        workLogStatus: 0,
        setWorkLogStatus: (workLogStatus: WorkLogStatus) => {
          set({ workLogStatus });
        },
        autoClockOut: false,
        setAutoClockOut: (autoClockOut: boolean) => {
          set({ autoClockOut });
        },
      }),
      { name: 'WorkLog' },
    ),
  ),
);
