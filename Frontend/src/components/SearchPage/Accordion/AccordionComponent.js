import classes from "./Accordion.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Checkbox, FormControlLabel } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadioComponent from "./RadioComponent";

const AccordionComponent = (props) => {
  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography style={{ color: "#4200FF", fontSize: "20px" }}>
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ paddingLeft: "20px" }}>
          {!props.radio &&
            props.checks.map((check, idx) => (
              <FormControlLabel
                key={idx}
                value="start"
                control={
                  <Checkbox
                    onChange={(event) =>
                      props.action({ check, checked: event.target.checked })
                    }
                    color="primary"
                  />
                }
                label={check}
                labelPlacement="end"
              />
            ))}
          {props.radio && <RadioComponent checks={props.checks} action={props.action}/>}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
