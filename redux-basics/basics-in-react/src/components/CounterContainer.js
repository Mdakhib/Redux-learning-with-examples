import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux";

function CounterContainer({ countNum, incrementCounter, decrementCounter }) {
  return (
    <div>
      <h2>Counter - {countNum} </h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countNum: state.counter.countNum,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(CounterContainer);
