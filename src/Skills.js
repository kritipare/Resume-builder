const Skills = ({ state }) => {
  return (
    <div className="section skills">
      <h2 className="heading">Skills</h2>
      <div className="wrapper">
        {state.skills.split(',').filter(skill => skill.trim().length).map((skill) => <div className="pills">{skill}</div> )}
      </div>
    </div>
  );
};
export default Skills;
