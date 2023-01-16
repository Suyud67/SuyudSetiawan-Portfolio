import { useState } from 'react';

function useInputForm(value = '') {
  const [input, setInput] = useState(value);

  const eventInput = (e) => {
    setInput(e.target.value);
  };

  return [input, eventInput];
}

export default useInputForm;
