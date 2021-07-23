import { CalcView } from "../component/calcView";
import { connect } from "react-redux";
import { plus, minus } from "../component/actions/counter";

const mapStateToProps = (getStateCount) => {
  return { getNum: getStateCount.count };
};

const mapDiapatchToProps = (diapatch) => {
  return {
    plus: (_num) => {
      diapatch(plus(_num));
    },
    minus: (_num) => {
      diapatch(minus(_num));
    }
  };
};
export default connect(mapStateToProps, mapDiapatchToProps)(CalcView);
