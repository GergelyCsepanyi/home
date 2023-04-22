import {useEffect, useState} from 'react';

type useEmailOutput = [
  string,
  undefined | string,
  (emailInput: string) => void,
];

const useEmail = (initialInput: string, ref): useEmailOutput => {
  const [emailState, setEmailState] = useState<string>(initialInput);
  const [errorState, setErrorState] = useState<string | undefined>(undefined);

  const setEmail = (emailInput: string) => {
    if (!emailInput.match(new RegExp(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/))) {
      setErrorState('Wrong email format!');
    } else {
      setErrorState(undefined);
      setEmailState(emailInput);
    }
  };

  useEffect(() => {
    if (errorState) {
      ref.current.text = errorState;
    }
  }, [errorState, ref]);

  return [emailState, errorState, setEmail];
};

export default useEmail;
