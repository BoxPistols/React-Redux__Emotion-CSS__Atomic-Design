import { css } from "@emotion/css";

const plate = css`
  /* for Text */
  font-size: fz;
  text-align: center;
  /* Block */
  margin: 8px;
  padding: 0.5em 48px;
  /* Graphic Design */
  color: ghostwhite;
  border: 1px solid hotpink;
  /* border-radius: 4em; */
  /* background-color: hotpink; */
  box-shadow: 4px 4px 12px 0 rgb(0, 0, 0, 50%);
`;

export const Plate = ({ classes, text, children, ...props }) => {
  return (
    <div fz={"1rem"} className={plate ? plate : classes} {...props}>
      {text ? text : children}
    </div>
  );
};
