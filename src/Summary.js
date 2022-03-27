const Summary = ({ state }) => {
  return (
    <div className="section summary">
      <h2 className="heading">SUMMARY</h2>
      <div className="short-description">
        {state.summary}
      </div>
    </div>
  );
};

export default Summary;
