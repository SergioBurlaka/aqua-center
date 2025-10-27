import { useEffect, useRef } from 'react';

export const useEffectOnce = (cb: () => void) => {
  const isCalled = useRef(false);

  useEffect(() => {
    if (!isCalled.current) {
      cb();
      isCalled.current = true;
    }
  }, [cb]);
};
