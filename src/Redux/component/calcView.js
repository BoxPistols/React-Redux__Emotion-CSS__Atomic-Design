import { Button } from "../../AtomicDesign/Atoms/Button";
import { Plate } from "../../AtomicDesign/Atoms/Plate";

export const CalcView = ({ getNum, plus, minus, getTitle, asyncMinus }) => {
  return (
    <div>
      <div className="App">
        <Plate fz="10px">
          <h2>{getTitle}</h2>
          <p>Count Num</p>
          <h2>{getNum}</h2>
          <Button text={"PLUS"} onClick={() => plus(5)} />
          <Button text={"MINUS"} onClick={() => minus(25)} />
          <Button text={"asyncMinus"} onClick={() => asyncMinus(25)} />
        </Plate>
      </div>
    </div>
  );
};
