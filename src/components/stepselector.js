import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

//icons
import { Icon } from "@iconify/react";
import pencilIcon from "@iconify/icons-mdi/pencil";
import graphIcon from "@iconify/icons-codicon/graph";

const newsurvey = "/newsurvey";
const results = "/results";

const StepSelector = () => {
  const [activeStep] = useState(useLocation().pathname);
  console.log(useLocation());

  return (
    <>
      <div className="stepSelector">
        <Link to={newsurvey}>
          <Icon
            className={`icon ${
              activeStep === newsurvey || activeStep === "/" ? "activeIcon" : ""
            }`}
            icon={pencilIcon}
          />
        </Link>

        <div className="hr" />

        <Link to={results}>
          <Icon
            className={`icon ${activeStep === results ? "activeIcon" : ""}`}
            icon={graphIcon}
          />
        </Link>
      </div>

      <div className="stepSelectorText">
        <span className={`${activeStep === newsurvey ? "activeIconText" : ""}`}>
          Uređivanje
        </span>
        <span>Pregled</span>
        <span>Slanje</span>
        <span className={`${activeStep === results ? "activeIconText" : ""}`}>
          Rezultati
        </span>
      </div>
    </>
  );
};

export default StepSelector;
