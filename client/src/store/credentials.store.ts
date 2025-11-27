import { useEffect, useState } from 'react';

import { useStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

import { localforageState } from '@utils/zustand/localforageState';

type ProjectIdStoreType = {
  token?: string;
  worker?: {
    id: number;
    name: string;
    email: string;
    role: string;
    brigadeId: string;
  };
  setToken: (token?: string) => void;
  setWorker: (worker?: ProjectIdStoreType['worker']) => void;
};

export const credentialsStore = createStore<ProjectIdStoreType>()(
  persist(
    (set) => ({
      setToken: (token) => {
        set({ token });
      },
      setWorker: (worker) => {
        set({ worker });
      },
    }),
    {
      name: 'token',
      storage: createJSONStorage(() => sessionStorage),
      partialize: ({ token, worker }) => ({ token, worker }),
    },
  ),
);
export const useCredentialsStore = () => useStore(credentialsStore);

export const useCredentialsHydration = () => {
  const [hydrated, setHydrated] = useState(credentialsStore.persist.hasHydrated);

  useEffect(() => {
    const unsubHydrate = credentialsStore.persist.onHydrate(() => setHydrated(false));
    const unsubFinishHydration = credentialsStore.persist.onFinishHydration(() => setHydrated(true));

    setHydrated(credentialsStore.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};
