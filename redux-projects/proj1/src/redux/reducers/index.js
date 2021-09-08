import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
} from "../reducers/productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedproduct: selectedProductReducer,
});

export default reducers;
