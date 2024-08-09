import {useCallback} from 'react';

function useDebounce(callback: () => void, delay: number, dependencies: any[] = []) {
  const debouncedCallback = useCallback(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...dependencies, delay]);

  return debouncedCallback;
}

export default useDebounce;
