import { Button } from "../../AtomicDesign/Atoms/Button";

export const CalcView = ({ getNum, plus, minus }) => {
  return (
    <div>
      <div className="App">
        <h1>Hello Redux</h1>
        <h2>Num: {getNum}</h2>
        <Button text={"PLUS"} onClick={() => plus(5)} />
        <Button text={"MINUS"} onClick={() => minus(25)} />
      </div>
    </div>
  );
};
