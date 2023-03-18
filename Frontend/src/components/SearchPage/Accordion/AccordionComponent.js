import React from "react";
import classes from "./Accordion.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Checkbox, FormControlLabel } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = (props) => {
  return (
    <Accordion style={{ width: "300px" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography style={{ color: "#4200FF", fontSize: "20px" }}>
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{paddingLeft:'20px'}}>
          {props.checks.map((check) => (
            <div>
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: "#1976D2",
                    fontSize: "16px",
                  },
                }}
                value="start"
                control={<Checkbox color="primary" />}
                label={check}
                labelPlacement="end"
              />
              <br />
            </div>
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
