import { Input } from "./style";

const InputComponent = ({
  id,
  type,
  name,
  value,
  onClick,
  onChange,
  required,
  placeholder,
  children,
  width
}) => {
  return (
    <Input
      width={width}
      id={id}
      type={type}
      name={name}
      defaultValue={value}
      placeholder={placeholder}
      required={required}
      onClick={onClick}
      onChange={onChange}
    >
      {children}
    </Input>
  );
};

export default InputComponent;