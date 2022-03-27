import { useState } from "react";

const PersonalDetails = ({ state }) => {
  return (
    <>
      <div>
        <h1 className="heading">
          {state.fname} {state.lname}
        </h1>
      </div>
      <div className="contact-details">
        <div>{state.phone}</div>|<div>{state.email}</div>|<div>{state.linkedin}</div>|
        <div>{state.website}</div>
      </div>
    </>
  );
};
export default PersonalDetails;
