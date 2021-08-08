import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import * as ui from "./AtomicDesign/Utility/ui";

export const App = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <DivEmWrap bc>
      <h1 className={em_css__color}>React Atomic Emotion</h1>
      {/* useState Toggle Style */}
      <button
        className={styles({ isSelected })}
        onClick={() => setIsSelected(!isSelected)}
      >
        Click here to change styles.
      </button>
    </DivEmWrap>
  );
};

/* ===== Styling-Design ===== */

/* emotion css */
const em_css__color = css`
  color: ${ui.c.main};
`;

/* Emotion Styled */
const DivEmWrap = styled.div`
    ${ui.tx_center}    
    /* ${ui.fx_center} */
    `;

/* Toggle Style useState */
const styles = ({ isSelected }) => css`
  border: solid 2px gray;
  padding: 8px 16px;
  background: none;
  border-radius: 24px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  ${isSelected === true &&
  `
    border-color: hotpink;
    background-color: #413F42;
    color: hotpink;
  `}
`;
