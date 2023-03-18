import React from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../store/Slices/SearchSlice";
import AccordionComponent from "../Accordion/AccordionComponent";

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "20px" }}>
      <AccordionComponent
        title="Title"
        checks={["Professor", "Lecturer", "Consultant", "Specialist"]}
        action={(title) => dispatch(searchActions.setTitle(title))}
      />
      <AccordionComponent
        title="Gender"
        checks={["Any", "Male", "Female"]}
        action={(gender) => dispatch(searchActions.setGender(gender))}
        radio
      />
      <AccordionComponent
        title="Availability"
        checks={["Any Day", "Today", "Tomorrow"]}
        action={(availability) =>
          dispatch(searchActions.setAvailability(availability))
        }
        radio
      />
      <AccordionComponent
        title="Entity"
        checks={["Online", "Hospital", "Clinic"]}
        action={(entity) => dispatch(searchActions.setEntity(entity))}
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
        action={(check) => {
          dispatch(searchActions.setFees(check));
        }}
        radio
      />
    </div>
  );
};

export default Filters;
