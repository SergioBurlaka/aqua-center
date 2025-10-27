import { useCallback, useRef } from 'react';

export const useHandler = <F extends Function>(f: F) => {
  const ref = useRef(f);
  ref.current = f;
  return useCallback((...args: unknown[]) => ref.current(...(args as [])), []) as unknown as F;
};
