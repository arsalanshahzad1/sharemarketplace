import { useEffect, useRef } from 'react';

/**
 * Declarative `setInterval`. Passing `null` as the delay pauses the timer
 * without tearing down the callback identity.
 */
export default function useInterval(callback, delay) {
  const saved = useRef(callback);

  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null || delay === undefined) return undefined;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
