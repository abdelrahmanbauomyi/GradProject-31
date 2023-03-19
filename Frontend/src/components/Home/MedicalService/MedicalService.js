import React from "react";
import classes from "./MedicalService.module.css"
import Section from "../../UI/Section"
import ServiceCard from "./ServiceCard";
import useWidthAndHeight from "../../../hooks/useWidthAndHeight";





const MedicalService = () => {
  const [width] = useWidthAndHeight();
return(
<Section title="Our Medical Services" paragraph ="we are dedicated to serve you medical services">
  <div className={classes.container}>
    <div className={classes.flex}>
<ServiceCard></ServiceCard>
<ServiceCard/>
<ServiceCard/>
<ServiceCard/>
</div>
</div>
</Section>
);
}
export default MedicalService;