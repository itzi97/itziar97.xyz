import "./SubjectCard.css";
import React from "react";

const SubjectCard = ({ title, Icon, subjects }) => {
  return (
    <div className="subjectcard">
      <div className="subjectcard__title" >
        <Icon /> <h3>{title}</h3>
      </div>
      <hr />
      <ul className="subjectcard__classlist">
        {subjects.map((subject) => (
          <li className="subjectcard__class">{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectCard;
