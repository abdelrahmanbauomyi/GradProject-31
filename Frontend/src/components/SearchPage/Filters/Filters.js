import React from "react";
import AccordionComponent from "../Accordion/AccordionComponent";
import { useDispatch } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "20px", position: "sticky", top: "0" }}>
      <AccordionComponent
        title="Title"
        checks={["Professor", "Lecturer", "Consultant", "Specialist"]}
        action={(title) => dispatch({ type: "TITLE", payload: title })}
        expanded
      />
      <AccordionComponent
        title="Gender"
        checks={["Any", "Male", "Female"]}
        action={(gender) => dispatch({ type: "GENDER", payload: gender })}
        radio
      />
      <AccordionComponent
        title="Availability"
        checks={["Any Day", "Today", "Tomorrow"]}
        action={(availability) =>
          dispatch({ type: "AVAILABILITY", payload: availability })
        }
        radio
      />
      <AccordionComponent
        title="Entity"
        checks={["Online", "Hospital", "Clinic"]}
        action={(entity) => dispatch({ type: "ENTITY", payload: entity })}
      />
      <AccordionComponent
        title="Fees"
        checks={[
          "Any",
          "Less than 50",
          "From 50 to 100",
          "From 100 to 200",
          "From 200 to 300",
          "Greater than 300",
        ]}

        action={(fees) => dispatch({ type: "FEES", payload: fees })}

        radio
      />
    </div>
  );
};

export default Filters;
