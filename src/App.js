import React, {useState} from "react";
import Header from "./Header/Header.js";
import Tutoring from "./Tutoring/Tutoring.js";
import ProjectCards from "./ProjectCards/ProjectCards.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  // Used in header and for determining routes for react router
  const routes = [
    { 
      path: "/", 
      component: Tutoring, 
      titleEN: null,
      titleES: null 
    },
    { 
      path: "/projects", 
      component: ProjectCards, 
      titleEN: "Projects",
      titleES: "Proyectos" 
    },
    //{
    //  path: "/blogs",
    //  component: null,
    //  titleEN: "Blogs",
    //  titleES: "Blogs"
    //},
    //{
    //  path: "/lectures",
    //  component: null,
    //  titleEN: "Lecture Notes",
    //  titleES: "Apuntes"
    //},
    { 
      path: "/tutoring", 
      component: Tutoring, 
      titleEN: "Tutoring",
      titleES: "Clases Particulares" 
    }
  ];

  // Language
  const languages = [ "English", "Español" ]; 
  const [language, setLanguage] = useState("English");

  return (
    <Router>
      <div className="App">
        <Header 
          routes={routes} 
          languages={languages} 
          handleLanguageChange={setLanguage}
          currentLanguage={language}
        />
        <Switch>
          {routes.map(route => (
            <Route
              path={route.path}
              render={route.component != null 
              ?  (props) => <route.component {...props} language={language} />
              : null }
              exact
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
