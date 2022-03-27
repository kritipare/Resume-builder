const Interests = ({ state }) => {
  return (
    <div className="section interests">
      <h2 className="heading">Interests</h2>
      <div className="wrapper">
        {state.interests.split(',').filter(interest => interest.trim().length).map(interest => <li>{interest}</li>)}
      </div>
    </div>
  );
};
export default Interests;
