import classes from "./Accordion.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadioComponent from "./RadioComponent";
import CheckBoxComponent from "./CheckBoxComponent";

const AccordionComponent = (props) => {
  const AccordionStyle = {
    "&:before": {
      backgroundColor: "transparent !important",
    },
    marginBottom: "5px",
    borderRadius: "10px !important",
  };

  return (
    <Accordion className={classes.accordion} sx={AccordionStyle} defaultExpanded={props.expanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography style={{ color: "#4200FF", fontSize: "20px" }}>
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ paddingLeft: "20px" }}>
          {!props.radio &&
            props.checks.map((check, idx) => (
              <CheckBoxComponent key={idx} check={check} action={props.action}/>
            ))}
          {props.radio && (
            <RadioComponent checks={props.checks} action={props.action} />
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
