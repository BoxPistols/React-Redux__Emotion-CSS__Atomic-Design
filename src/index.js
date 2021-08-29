import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles.scss";
import { App } from "./App";

import styled from "@emotion/styled";
import * as ui from "./AtomicDesign/Utility/ui";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Redux/reducers/index";
import CalcFunc from "./Redux/container/calcFunc";
import { Global } from "@emotion/react";

const middleWares = [thunk];
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWares)
);
/* eslint-enable */

/* Emotion Styled */

const DivEmWrap = styled.div`
  ${ui.tx_center}
  max-width: 640px;
  margin: auto;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <DivEmWrap>
        <Global />
        <App />
        <CalcFunc />
      </DivEmWrap>
    </Provider>
  </StrictMode>,
  rootElement
);
