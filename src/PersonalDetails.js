import { useState } from "react";

const PersonalDetails = ({ fname }) => {
//   const [fname, setfName] = useState("John");
  const [lname, setLName] = useState("Doe");
  return (
    <>
      <div>
        <h1 className="heading">
          {fname} {lname}
        </h1>
      </div>
      <div className="contact-details">
        <div>12345678</div>|<div>johndoe@example.com</div>|<div>Linkedin</div>|
        <div>Website</div>
      </div>
    </>
  );
};
export default PersonalDetails;
