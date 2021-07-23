import { css } from "@emotion/css";
// import { fz } from "../Utility/ui";
import * as ui from "../Utility/ui";

/*
{
const Wrapper = styled.div`
    ${ui.fz(16)};
    ${ui.block.dg}
    ${ui.bgc(ui.c.gray.g800)};
    color: ${texColor};
    // TODO: Autoprefix for IE
    grid-template-columns: 50% 1fr;
    grid-template-rows: 60px 1fr 40px;
    min-height: 100vh;
`
const Header = styled.header`
    // col(Horizontal), row(Vertical)
    ${ui.grid(1, 4, 1, 2)};
    ${ui.bgc(ui.c.gray.g400)};
`
const Header__Mol_Title = styled.div`
    ${ui.fx_center}
    ${ui.color(ui.c.main)};
    ${ui.fz(24)};
    ${ui.bgc(ui.c.dark)};
    height: 60px;
`
// Atomic
const TextArea__Org = styled.div`
    // col(Horizontal), row(Vertical)
    ${ui.grid(1, 2, 2, 3)}
`
const TextArea = styled.textarea`
    ${ui.block.df}
    ${ui.bgc(ui.c.gray.g900)};
    ${ui.fz(16)};
    color: ${texColor};
    width: 100%;
    height: 100%;
    padding: 24px;
    border: none;
    resize: none;
    &:hover {
        background-color: #222;
        transition: 0.3s;
    }
  }
*/

const button = css`
  /* for Text */
  /* font-size: calc(1rem + 1vw); */
  ${ui.fz(12)}

  text-align: center;
  /* Block */
  margin: 8px;
  padding: 0.5em 48px;
  /* Graphic Design */
  /* color: ghostwhite; */
  border: none;
  border-radius: 4em;
  background-color: hotpink;
  box-shadow: 4px 4px 12px 0 rgb(0, 0, 0, 50%);
  transition: 0.3s;
  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

export const Button = ({ classes, onClick, text, children, ...props }) => {
  return (
    <button
      className={button ? button : classes}
      onClick={onClick ? onClick : null}
      {...props}
    >
      {text ? text : children}
    </button>
  );
};
