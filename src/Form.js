import InputList from "./InputList";
const Form = () => {
  return (
    <form action="">
      <div className="form-section">
        <h1 className="heading">Calculate Your BMI</h1>
        <InputList />
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
