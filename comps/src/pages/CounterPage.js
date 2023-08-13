import React, { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

const ACTION_INCREMENT = "increment";
const ACTION_DECREMENT = "decrement";
const ACTION_ADD_TO_COUNT = "add-to-count";
const ACTION_SET_VALUE_TO_ADD = "set-value-to-add";

function reduser(state, action) {
  switch (action.type) {
    case ACTION_INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION_DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION_ADD_TO_COUNT:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    case ACTION_SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    default:
      return state;
  }
}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reduser, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: ACTION_INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTION_DECREMENT });
  };

  const handleChange = (event) => {
    const value = Number(event.target.value) || 0;
    dispatch({ type: ACTION_SET_VALUE_TO_ADD, payload: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION_ADD_TO_COUNT });
  };
  return (
    <div>
      <Panel className="flex flex-row items-center">
        <Button primary rounded onClick={increment}>
          +
        </Button>
        <div className="flex flex-col items-center ml-2 mr-2">
          <div>count</div>
          <div>{state.count}</div>
        </div>
        <Button primary rounded onClick={decrement}>
          -
        </Button>
      </Panel>
      <Panel>
        <form className="flex flex-col items-center justify-between">
          <input
            type="number"
            className="rounded-md border-green-500 border-2 p-1"
            value={state.valueToAdd || ""}
            onChange={handleChange}
          />
          <Button className="m-2" success rounded onClick={handleSubmit}>
            add to value
          </Button>
        </form>
      </Panel>
    </div>
  );
}

export default CounterPage;
