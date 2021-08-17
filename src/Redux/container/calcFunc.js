import { CalcView } from "../component/calcView";
import { connect } from "react-redux";
import { plus, minus } from "../component/actions/counter";

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
    }
  };
};
export default connect(mapStateToProps, mapDiapatchToProps)(CalcView);
