import React from "react";
import AccordionComponent from "../Accordion/AccordionComponent";

const Filters = () => {
  return (
    <div>
      <AccordionComponent
        title="Title"
        checks={["Professor", "Lecturer", "Consultant", "Specialist"]}
      />
      <AccordionComponent title="Gender" checks={["Male", "Female"]} />
    </div>
  );
};

export default Filters;
