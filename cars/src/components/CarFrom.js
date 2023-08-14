import React from "react";
import { addCar, changeCost, changeName } from "../store";
import { useDispatch, useSelector } from "react-redux";

function CarFrom() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => ({
    name: state.form.name,
    cost: state.form.cost,
  }));

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleValueChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add a car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Car Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Car Value</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              type="number"
              onChange={handleValueChange}
            />
          </div>
          <div className="field">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarFrom;
