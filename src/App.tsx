const App = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Alarm Clock!!</h2>
        <p>Set alarm time</p>
        <div className="card-actions justify-end">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
          />
          <button className="btn btn-primary">Set</button>
        </div>
      </div>
    </div>
  );
};

export default App;
