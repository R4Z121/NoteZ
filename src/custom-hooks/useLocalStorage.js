import { useState } from "react"

function useLocalStorage(key, initialValue, checkValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) === checkValue ? checkValue : initialValue;
  });

  const updateValue = newValue => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  }

  return [value, updateValue];
}

export default useLocalStorage;