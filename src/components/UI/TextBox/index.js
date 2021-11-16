import Base from "../Base";

const TextBox = (
  {
    label,
    onChange,
    placeholder,
    value,
    className
  }
)=>{
  return (
    <Base
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      label={label}
      className = {["textbox", className].join(" ")}
    >
    </Base>
  );
}

export default TextBox;
