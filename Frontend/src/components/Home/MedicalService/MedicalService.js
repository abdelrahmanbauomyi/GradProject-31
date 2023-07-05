import React from "react";
import classes from "./MedicalService.module.css"
import Section from "../../UI/Section"
import ServiceCard from "./ServiceCard";
import useWidthAndHeight from "../../../hooks/useWidthAndHeight";
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { faFlaskVial } from '@fortawesome/free-solid-svg-icons'
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons'
import { faCapsules } from '@fortawesome/free-solid-svg-icons'






const MedicalService = () => {
  const [width] = useWidthAndHeight();
return(
<Section title="Our Medical Services" paragraph ="we are dedicated to serve you medical services">
  <div className={classes.container}>
    <div className={classes.flex}>  
<ServiceCard para= "Well Equipped Lab" icon={faFlaskVial}/>
<ServiceCard para="Online Medical examination
" icon={faStethoscope}/>
<ServiceCard para="Ambulance Service"  icon={faTruckMedical} />
<ServiceCard para="Drugs Consultation" icon={faCapsules}/>
</div>
</div>
</Section>
);
}
export default MedicalService;