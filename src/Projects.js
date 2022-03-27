import React from "react";

const Projects = ({ state }) => {
  return (
    <div className="section academic-projects">
      <h2 className="heading">Academic projects</h2>
      {state.projects.map((project) => (
        <>
          <h3 className="subheading2">{project.title}</h3>
          <h4 className="subheading3">
            Technologies/Tools used:{" "}
            {project.techUsed}
          </h4>
          {project.details.length &&
            project?.details?.map((detail) => {
              return <li>{detail}</li>;
            })}
        </>
      ))}
    </div>
  );
};

export default Projects;
