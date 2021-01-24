import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="projectCard" style={{ 
      backgroundImage: `url(${image})`,
      backgroundSize: "cover"
    }}>
      <div className="projectCard__container">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
