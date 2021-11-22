import Base from "../Base";

const Password = (
  {
    label,
    onChange,
    placeholder,
    value,
    className,
    name
  }
)=>{
  return (
    <Base
      type="password"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      label={label}
      className = {["textbox", className].join(" ")}
      name={name}
    >
    </Base>
  );
}

export default Password;
