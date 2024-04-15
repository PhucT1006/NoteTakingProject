import "./SignUp.module.css";
const Requirement = (props) => {
  const { item } = props;
  const content = data[0];
  const status = data[1];

  const ClassCondition = () => {
    const classes = ["requirement"];
    if (status) {
      classes.push("valid");
    }
    return classes.join(" ");
  };

  return (
    <>
      <p className={ClassCondition()} id="passError">
        <strong>Password must contain the following:</strong>
      </p>
      <p className={ClassCondition()}>{content}</p>
    </>
  );
};

export default Requirement;
