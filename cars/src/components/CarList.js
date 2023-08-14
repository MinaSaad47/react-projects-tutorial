import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const { name, cars } = useSelector((state) => ({
    cars: state.cars.data.filter((car) =>
      car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
    ),
    name: state.form.name,
  }));

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map(function (car) {
    console.log(car);
    const bold = name && car.name.toLowerCase().includes(name);
    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars} <hr />
    </div>
  );
}

export default CarList;
