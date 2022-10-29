import { useState, useCallback } from 'react';

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((v) => {
    if (typeof v === "boolean") {
      setValue(v);
      return;
    }
    setValue((val) => !val);
  }, [])

  return [value, toggle]
}
