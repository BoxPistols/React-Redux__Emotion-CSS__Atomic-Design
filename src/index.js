import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Redux/reducers/index";
import CalcFunc from "./Redux/container/calcFunc";

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CalcFunc />
    </Provider>
  </StrictMode>,
  rootElement
);
