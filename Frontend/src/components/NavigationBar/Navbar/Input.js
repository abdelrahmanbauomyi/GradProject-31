  import classes from "./Input.module.css";

  const Input = (props) => {
    const { input, label, value, onChange,onBlur} = props;
    return (
      <div className={classes.input}>
        {/* <label htmlFor={props.input.id}>{props.label} </label> */}
        {/* <input {...props.input} value={props.value} onChange={props.onChange} /> */}
        <label htmlFor={props.input.id}>{label} </label>
        <input {...input} value={value} onChange={onChange} onBlur={onBlur} 
        className={`${classes.numberInput} ${input.focus ? classes.focus : ''}`} onFocus={() => input.focus = true} />

      </div>
    );
  };

  export default Input;
