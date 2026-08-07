import { useEffect, useState } from 'react';

/**
 * Returns `value` after it has stayed unchanged for `delay` ms. Useful for
 * search inputs and any state that would otherwise fire a request per keystroke.
 */
export default function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}
