import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer({ item, buyItem }) {
  return (
    <div>
      <h2>Item - {item} </h2>
      <button onClick={buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.propsPassingByChildComponentToParentAsOwnProps
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunctions =
    ownProps.propsPassingByChildComponentToParentAsOwnProps
      ? () => dispatch(buyCake())
      : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunctions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
