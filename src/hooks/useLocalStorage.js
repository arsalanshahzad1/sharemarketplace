import { useCallback, useState } from 'react';

/**
 * `useState` that persists to localStorage. Falls back to in-memory state when
 * storage is unavailable (private mode, blocked cookies) rather than throwing.
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? initialValue : JSON.parse(raw);
    } catch {
      return initialValue;
    }
  });

  const update = useCallback(
    (next) => {
      setValue((current) => {
        const resolved = typeof next === 'function' ? next(current) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          // Storage unavailable — keep the value in memory for this session.
        }
        return resolved;
      });
    },
    [key],
  );

  return [value, update];
}
