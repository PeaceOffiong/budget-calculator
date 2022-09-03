import React from 'react'
import { useGlobalContext } from "./context";
import Alert from "./Alert";

const Form = () => {
  const {
    chargeValue,
    amountValue,
    handleInput,
    handleSubmit,
    alert,
    isEditing,
  } = useGlobalContext();
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h3>Budget Calculator</h3>
      <div className="alert">{alert.show && <Alert />}</div>
      <div className="contain">
        <label htmlFor="charge">Charge :</label>
        <input
          type="text"
          className="charge"
          value={chargeValue}
          name="charge"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div className="contain">
        <label htmlFor="amount">Amount :</label>
        <input
          type="number"
          className="amount"
          value={amountValue}
          name="amount"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <button className="btn">{ isEditing ? "Edit" : "Submit"}</button>
    </form>
  );
}

export default Form