const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;

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

// const initialState = {
//   numOfCake: 10,
//   numOfIceCreams: 20,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "BUY_CAKE":
//       return {
//         ...state,
//         numOfCake: state.numOfCake - 1,
//       };
//     case "BUY_ICECREAM":
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log('initialState:', store.getState());
const unsubcribe=store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake());
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubcribe()