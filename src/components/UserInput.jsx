export default function UserInput() {
  return (
    <section id="user-input">
      <p className="input-group">
        <div>
          <label>Initial investment</label>
          <input type="text" />
        </div>
        <div>
          <label>Annual Investment</label>
          <input type="text" />
        </div>
      </p>
      <p className="input-group">
        <div>
          <label>Expected Return</label>
          <input type="text" />
        </div>
        <div>
          <label>Duration</label>
          <input type="text" />
        </div>
      </p>
    </section>
  );
}
