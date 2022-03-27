const Education = ({ state: { education : { institution, degree, YOP, grade, stream} }}) => {
  return (
    <div className="section education">
      <h2 className="heading">EDUCATION</h2>
      <div className="content">
        <h4 className="subheading duration">
          <div>{degree}, {stream}</div>
          <div>{YOP}</div>
        </h4>
        <h5 className="subheading2 location">
          <div>{institution}</div>
          <div>{grade}</div>
        </h5>
      </div>
    </div>
  );
};

export default Education;
