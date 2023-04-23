import React, { useRef, useState } from "react";
import "./App.css";
import useEmail from "./hooks/useEmail";
import useEmailDisplayError from "./hooks/useEmailDisplayError";

function TestUseEmailHook() {
  const [emailInput, setEmailInput] = useState("");
  const { email, emailError, setEmail } = useEmail("");

  const handleEmailSubmit = () => {
    setEmail(emailInput);
  };

  return (
    <div className="App">
      <div>Email: {email}</div>
      <input
        type="text"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <div>{emailError ?? emailError}</div>
      <button onClick={handleEmailSubmit}>Submit</button>
    </div>
  );
}

function TestUseEmailDisplayErrorHook() {
  const [emailInput, setEmailInput] = useState("");
  const emailErrorTextRef = useRef(null);
  const { email, setEmail } = useEmailDisplayError("", emailErrorTextRef);

  const handleEmailSubmit = () => {
    setEmail(emailInput);
  };

  return (
    <div className="App">
      <div>Email: {email}</div>
      <input
        type="text"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <div ref={emailErrorTextRef}></div>
      <button onClick={handleEmailSubmit}>Submit</button>
    </div>
  );
}

function App() {
  // return <TestUseEmailHook />;
  return <TestUseEmailDisplayErrorHook />;
}

export default App;
