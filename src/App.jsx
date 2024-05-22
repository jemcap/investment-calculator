import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1;

  function handleNewUserInput(property, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [property]: +value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} changeInput={handleNewUserInput} />
      {validInput ? (
        <Result input={userInput} />
      ) : (
        <p className="center">Please input a duration</p>
      )}
    </>
  );
}

export default App;
