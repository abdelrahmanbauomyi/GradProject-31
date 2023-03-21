import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { FormControlLabel } from "@mui/material";

const RadioComponent = ({ checks, action }) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={checks[0]}
        name="radio-buttons-group"
        /* onChange={(event) => action(event.target.value)} */
      >
        {checks.map((check, idx) => (
          <FormControlLabel
            key={idx}
            value={check}
            control={
              <Radio
                sx={{
                  " &.Mui-checked": {
                    color: "#4200ff",
                  },
                }}
              />
            }
            label={check}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioComponent;
