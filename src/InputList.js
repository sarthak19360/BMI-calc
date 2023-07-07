
import Input from "./Input";
const InputList = () => {
  return (
    <>
      <Input name="name" type="string" placeholder="Your Name" />
      <Input name="age" type="number" placeholder="Your Age" />
      <Input name="height" type="number" placeholder="Height (in cm)" />
      <Input name="weight" type="number" placeholder="Weight (in kg)" />
    </>
  );
};

export default InputList;
