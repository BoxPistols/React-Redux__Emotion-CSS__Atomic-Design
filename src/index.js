import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { App } from "./App";

import styled from "@emotion/styled";
import { css } from "@emotion/css";
import * as ui from "./AtomicDesign/Utility/ui";

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


/* Emotion Styled */
const DivEmWrap = styled.div`
    ${ui.tx_center}
  `;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <DivEmWrap>
        <App />
        <CalcFunc />
      </DivEmWrap>
    </Provider>
  </StrictMode>,
  rootElement
);
