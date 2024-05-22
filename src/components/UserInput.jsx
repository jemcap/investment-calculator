import { useState } from "react";

export default function UserInput() {
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
        [property]: value,
      };
    });
  }
  return (
    <section id="user-input">
      <p className="input-group">
        <div>
          <label>Initial investment</label>
          <input
            type="text"
            value={userInput.initialInvestment}
            required
            onChange={(e) =>
              handleNewUserInput("initialInvestment", e.target.value)
            }
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="text"
            value={userInput.annualInvestment}
            required
            onChange={(e) =>
              handleNewUserInput("annualInvestment", e.target.value)
            }
          />
        </div>
      </p>
      <p className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="text"
            value={userInput.expectedReturn}
            required
            onChange={(e) =>
              handleNewUserInput("expectedReturn", e.target.value)
            }
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="text"
            value={userInput.duration}
            required
            onChange={(e) => handleNewUserInput("duration", e.target.value)}
          />
        </div>
      </p>
    </section>
  );
}
