const Input = (props) => {
  const { name, type, placeholder } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

export default Input;
