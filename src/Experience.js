const Experience = ({ state }) => {
  return (
    <div className="section professional-experience">
      <h2 className="heading">PROFESSIONAL EXPERIENCE</h2>
      <div className="content">
        <h4 className="subheading duration">
          <div>{state.experience.jobTitle}</div>
          <div>{state.experience.startDate} - present</div>
        </h4>
        <h5 className="subheading2 location">
          <div>{state.experience.companyName}</div>
          <div>{state.experience.location}</div>
        </h5>
        <div className="experience-bullet-points">
          <div className="short-description">
            {/* max characters - 258 */}
            {state.experience.shortDescription}
          </div>
          {state.experience.details.length &&
            state.experience?.details?.map((detail) => {
              return <li>{detail}</li>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
