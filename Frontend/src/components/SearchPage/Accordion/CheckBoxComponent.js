import { Checkbox, FormControlLabel } from "@mui/material";

const CheckBoxComponent = (props) => {
    const check = props.check;
  return (
    <FormControlLabel
      value="start"
      control={
        <Checkbox
          sx={{
            "&.Mui-checked": {
              color: "#4200ff",
            },
          }}
          /* onChange={(event) =>
            props.action({ check , checked: event.target.checked })
          } */
        />
      }
      label={check}
      labelPlacement="end"
    />
  );
};

export default CheckBoxComponent;
