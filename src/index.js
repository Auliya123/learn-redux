import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";

const globalState = {
  totalOrder: 0
};

//reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === "HANDLE_PLUS") {
    return {
      ...state,
      totalOrder: state.totalOrder + 1
    };
  }

  if (action.type === "HANDLE_MINUS") {
    let totalOrder = 0;
    if (state.totalOrder > 0) {
      totalOrder = state.totalOrder - 1;
    }
    return {
      ...state,
      totalOrder: totalOrder
    };
  }
  return state;
};

//store
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
