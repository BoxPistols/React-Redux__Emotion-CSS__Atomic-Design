import { CalcView } from "../component/calcView";
import { connect } from "react-redux";
import { plus, minus, asyncMinus, getJson } from "../component/actions/counter";

const mapStateToProps = (state) => {
  return {
    getNum: state.count,
    getTitle: state.title
  };
};

const mapDiapatchToProps = (diapatch) => {
  return {
    plus: (_num) => {
      diapatch(plus(_num));
    },
    minus: (_num) => {
      diapatch(minus(_num));
    },
    asyncMinus: (_num) => {
      diapatch(asyncMinus(_num));
    },
    getJson: () => {
      diapatch(getJson());
    }
  };
};
export default connect(mapStateToProps, mapDiapatchToProps)(CalcView);
