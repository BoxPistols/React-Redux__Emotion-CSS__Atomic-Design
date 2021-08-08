import styled from "@emotion/styled";
import { css } from "@emotion/css";
import * as ui from "./AtomicDesign/Utility/ui";

export const App = () => {
  return (
    <DivEmWrap>
      <h1 className={em_css__color}>React Atomic Emotion</h1>
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
