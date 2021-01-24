import "./Tutoring.css";

import React, { useState } from "react";

import SchoolIcon from "@material-ui/icons/School";
import FunctionsIcon from "@material-ui/icons/Functions";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import EmailIcon from "@material-ui/icons/Email";

// Import components
import SubjectCard from "./SubjectCard/SubjectCard.js";

const Tutoring = ({ language }) => {
  const getClasses = () => {
    switch (language) {
      case "English": return ([
        {
          title: "Mathematics",
          icon: FunctionsIcon,
          subjects: [
            "Geometry",
            "Algebra 1",
            "Algebra 2",
            "Trigonometry & Precalculus",
            "Statistics & Probability",
            "Calculus 1",
            "Calculus 2",
            "Calculus 3",
            "Discrete Mathematics",
            "LaTeX Document Typesetting",
          ],
        },
        {
          title: "Software Engineering",
          icon: LaptopChromebookIcon,
          subjects: [
            "Bash, C, C++, Java, Go, Python Programming",
            "Web Programming: HTML, CSS, JavaScript, JQuery, React",
            "Design Patterns",
            "Algorithms",
            "Data Structures",
            "SQL & NoSQL Databases",
            "Vim",
          ],
        },
      ]);
      case "Español": return ([
        {
          title: "Matemáticas",
          icon: FunctionsIcon,
          subjects: [
            "Geometría",
            "Álgebra",
            "Trigonometría",
            "Estadística y Probabilidad",
            "Cálculo",
            "Análisis Matemático I",
            "Matemática Discreta",
            "Escritura Matemática con LaTeX",
          ],
        },
        {
          title: "Ingeniería de Software",
          icon: LaptopChromebookIcon,
          subjects: [
            "Programación en Bash, C, C++, Java, Go y  Python",
            "Programación Web: HTML, CSS, JavaScript, JQuery y React",
            "Diseño de Patrones",
            "Algoritmos",
            "Estructuras de Datos",
            "Bases de Datos SQL y NoSQL",
            "Vim",
          ],
        },

      ]);
    }
  }

  const getTutoringInfo = () => {
    switch (language) {
      case "English": {
        return (
          <p>
            I'm a university software engineering and mathematics student offering
            private tutoring for a few different subjects in both spanish and
            english. I teach both highschool level and college level subjects, as
            shown below.
          </p>
        );
      }
      case "Español": {
        return (
          <p>
            Estoy estudiando matemáticas e ingeniería de software en la
            universidad y ofrezco clases particulares online en algunas
            asignaturas tanto en español como en inglés. Enseño asignaturas a
            nivel de ESO, Bachillerato y universidad como se puede ver debajo.
          </p>
        );
      }
    }
  }

  const getContactInfo = () => {
    switch (language) {
      case "English": return (
        <div className="tutoring__information">
          <h2>Contact & Pricing</h2>
          <ul>
            <li>
              Clases are priced at 10€ an hour, payments are only admitted
              through PayPal.
            </li>
            <li>
              You can contact me for classes at
                <a href="mailto:itziar@itziar97.xyz">itziar@itziar97.xyz</a>.
            </li>
          </ul>
        </div>
      );
      case "Español": return (
        <div className="tutoring__information">
          <h2>Contacto y Precios</h2>
          <ul>
            <li>
              Doy clases a 10€ la hora, acepto pagos por PayPal.
            </li>
            <li>
              Contáctame por correo a
                <a href="mailto:itziar@itziar97.xyz">itziar@itziar97.xyz</a>.
            </li>
          </ul>
        </div>
      );
    }
  }


  return (
    <div className="tutoring">
      <div className="tutoring__title">
        <SchoolIcon fontSize="large" />
        <h1>{language === "English" ? "Tutoring" : "Clases Particulares"}</h1>
      </div>
      <div className="tutoring__info">
        {getTutoringInfo()}
        <div className="tutoring__body">
          <div className="tutoring__subjects">
            <h2>{language === "English" ? "Subjects" : "Asignaturas"}</h2>
            <div className="tutoring__cards">
              {getClasses().map((c) => (
                <SubjectCard title={c.title} Icon={c.icon} subjects={c.subjects} />
              ))}
            </div>
          </div>
          {getContactInfo()}
        </div>
      </div>
    </div>
  );
};

export default Tutoring;
