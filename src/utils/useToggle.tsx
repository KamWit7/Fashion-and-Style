import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [boolean, setBoolean] = useState(initialValue);

  const on = () => setBoolean(true);
  const of = () => setBoolean(false);
  const toggle = () => setBoolean((prev) => !prev);

  return [boolean, { on, of, toggle }] as const;
};

export default useToggle;
