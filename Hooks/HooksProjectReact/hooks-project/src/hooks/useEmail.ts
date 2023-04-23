import { useState } from "react";

// type useEmailOutput = [
//   string,
//   undefined | string,
//   (emailInput: string) => void,
// ];

type useEmailOutput = {
  email: string;
  emailError: undefined | string;
  setEmail: (emailInput: string) => void;
};

const useEmail = (initialInput: string): useEmailOutput => {
  const [emailState, setEmailState] = useState<string>(initialInput);
  const [errorState, setErrorState] = useState<string | undefined>(undefined);

  const setEmail = (emailInput: string) => {
    if (!emailInput.match(new RegExp(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/))) {
      setErrorState("Wrong email format!");
    } else {
      setErrorState(undefined);
      setEmailState(emailInput);
    }
  };

  return { email: emailState, emailError: errorState, setEmail };
};

export default useEmail;
