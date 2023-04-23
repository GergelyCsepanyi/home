import { useEffect, useState } from "react";

type useEmailOutput = {
  email: string;
  emailError: undefined | string;
  setEmail: (emailInput: string) => void;
};

const useEmail = (
  initialInput: string,
  // ref: React.MutableRefObject<undefined | string>
  ref: any
): useEmailOutput => {
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

  useEffect(() => {
    console.log("email error: ", errorState);
    console.log("ref.current: ", ref.current);
    if (errorState) {
      ref.current.innerHTML = errorState;
      ref.current.style = "color: red";
    } else {
      ref.current.innerHTML = "";
    }
  }, [errorState, ref]);

  return { email: emailState, emailError: errorState, setEmail };
};

export default useEmail;
