import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer({ buyIceCream, numOfIceCream }) {
  return (
    <div>
      <h2>Number of IceCream - {numOfIceCream} </h2>
      <button onClick={buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(IceCreamContainer);
