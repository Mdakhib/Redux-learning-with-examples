import { INCREMENT, DECREMENT } from "./counterType";

const initialState = {
  countNum: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        countNum: state.countNum + 1,
      };
    case DECREMENT:
      return {
        ...state,
        countNum: state.countNum - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
