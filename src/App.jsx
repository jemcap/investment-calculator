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
      <Result />
    </>
  );
}

export default App;
