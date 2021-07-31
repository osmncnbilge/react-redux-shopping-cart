import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducers } from "./reducers/productReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const store = createStore(
  combineReducers({
    products: productsReducers,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
