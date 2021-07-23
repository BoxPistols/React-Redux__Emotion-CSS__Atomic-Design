import { Button } from "../../AtomicDesign/Atoms/Button";
import { Plate } from "../../AtomicDesign/Atoms/Plate";

export const CalcView = ({ getNum, plus, minus }) => {
  return (
    <div>
      <div className="App">
        <Plate fz="10px">
          <h1>React-Atomic</h1>
          <h2>Count Num: {getNum}</h2>
          <Button text={"PLUS"} onClick={() => plus(5)} />
          <Button text={"MINUS"} onClick={() => minus(25)} />
        </Plate>
      </div>
    </div>
  );
};
