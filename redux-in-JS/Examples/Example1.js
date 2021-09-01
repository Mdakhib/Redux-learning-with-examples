const redux = require("redux");
const createStore = redux.createStore;
// const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: "BUY_CAKE",
    info: "First redux action",
  };
}

// function buyIceCream() {
//   return {
//     type: "BUY_ICECREAM",
//     info: "First redux action",
//   };
// }

const buyIceCream = () => {
  return { type: "BUY_ICECREAM" };
};



const initialState = {
  numOfCake: 10,
  numOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log('initialState:', store.getState());
const unsubcribe=store.subscribe(() => console.log('updatedState:', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake());
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubcribe()