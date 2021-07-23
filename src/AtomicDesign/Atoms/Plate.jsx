import { css } from "@emotion/css";
import * as ui from "../Utility/ui";

const plate = css`
  /* Block */
  /* margin: 8px; */
  margin: ${ui.size(32)};
  padding: ${ui.size(24)} ${ui.size(12)} ${ui.size(32)};
  /* padding: 0.5em 48px; */
  /* Graphic Design */
  color: ghostwhite;
  border: 1px solid hotpink;
  /* background-color: ${ui.c.gray.__800}; */
  ${ui.bgc(ui.c.gray.__800)}
  /* background-color: hotpink; */
  box-shadow: 4px 4px 12px 0 rgb(0, 0, 0, 50%);
`;

export const Plate = ({ classes, children, ...props }) => {
  return (
    <div className={plate ? plate : classes} {...props}>
      {children}
    </div>
  );
};
