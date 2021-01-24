import React from "react";

import math from "./../imgs/math.jpg";

import ProjectCard from "./ProjectCard/ProjectCard.js";
import "./ProjectCards.css";

const ProjectCards = ({ language }) => {
  let cards = [
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    },
    {
      titleES: "Tarjeta de Proyecto",
      titleEN: "Project Card",
      descES: "Descripción Corta",
      descEN: "Short description",
      image: math
    }
  ];

  return (
    <div className="projectCards">
      {cards.map(card => (
        <ProjectCard
          title={language === "English" ? card.titleEN : card.titleES}
          description={language === "English" ? card.descEN : card.descES}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default ProjectCards;
