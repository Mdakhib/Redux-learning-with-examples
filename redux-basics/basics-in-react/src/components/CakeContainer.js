import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer({ buyCake, numOfCakes }) {
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes} </h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(CakeContainer);
