import { useSyncExternalStore } from "react";

export function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  const getState = () => state;

  const setState = (partial) => {
    const patch = typeof partial === "function" ? partial(state) : partial;
    if (patch == null) return;
    const next = { ...state, ...patch };
    if (Object.is(next, state)) return;
    state = next;
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const reset = () => setState(() => initialState);

  return { getState, setState, subscribe, reset };
}

export function useStore(store, selector = (s) => s) {
  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(store.getState()),
  );
}

export function createStoreHook(store) {
  return (selector) => useStore(store, selector);
}

export function createScheduler() {
  const handles = new Set();

  const schedule = (ms, fn) => {
    const id = setTimeout(() => {
      handles.delete(id);
      fn();
    }, ms);
    handles.add(id);
    return id;
  };

  const cancelAll = () => {
    handles.forEach(clearTimeout);
    handles.clear();
  };

  return { schedule, cancelAll };
}
