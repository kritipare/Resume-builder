const Experience = () => {
  return (
    <div className="section professional-experience">
      <h2 className="heading">PROFESSIONAL EXPERIENCE</h2>
      <div className="content">
        <h4 className="subheading duration">
          <div>Job Title</div>
          <div>Feb 2021 - present</div>
        </h4>
        <h5 className="subheading2 location">
          <div>Company Name</div>
          <div>Bangalore</div>
        </h5>
        <div className="experience-bullet-points">
          <div className="short-description">
            {/* max characters - 258 */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem Ipsum has been the industry's standard
            dummy text Lorem Ipsum has been the industry's standard dummy
          </div>
          <li>
            {/* max characters - 133 */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet
          </li>
          <li>Vivamus porta massa quis iaculis imperdiet.</li>
          <li>In at ante tincidunt, vulputate lacus id, accumsan ipsum.</li>
          <li>Aenean lacinia est ac tellus sodales eleifend.</li>
        </div>
      </div>
    </div>
  );
};

export default Experience;
