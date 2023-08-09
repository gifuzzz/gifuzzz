import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [value, setValue] = useState(false);

  const setMode = (value) => {
    window.localStorage.setItem('darkMode', value)
    document.body.classList.add(value ? 'dark' : 'light')
    document.body.classList.remove(value ? 'light' : 'dark')
    setValue(value)
  };

  const toggle = () => {
    value ? setMode(false) : setMode(true)
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('darkMode');
    if (localTheme !== true && localTheme !== false) {
      setMode(false) // false is the default value
    } else {
      setValue(localTheme === true)
    }
  }, []);

  // do the same but with true and false

  return {
    value,
    toggle,
    enable: () => setMode(true),
    disable: () => setMode(false),
  }
}

export default useDarkMode;