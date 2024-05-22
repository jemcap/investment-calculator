export default function UserInput({ userInput, changeInput }) {
  return (
    <section id="user-input">
      <p className="input-group">
        <div>
          <label>Initial investment</label>
          <input
            type="text"
            value={userInput.initialInvestment}
            required
            onChange={(e) => changeInput("initialInvestment", e.target.value)}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="text"
            value={userInput.annualInvestment}
            required
            onChange={(e) => changeInput("annualInvestment", e.target.value)}
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
            onChange={(e) => changeInput("expectedReturn", e.target.value)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="text"
            value={userInput.duration}
            required
            onChange={(e) => changeInput("duration", e.target.value)}
          />
        </div>
      </p>
    </section>
  );
}
