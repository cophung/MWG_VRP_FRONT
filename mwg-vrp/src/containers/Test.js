import { connect } from "react-redux";

import Test from "../components/Test";
import { increase, decrease, reset } from "../actions/test";

const mapStateToProps = (state) => {
  return {
    counter: state.test,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch(increase());
    },
    decrease: () => {
      dispatch(decrease());
    },
    reset: () => {
      dispatch(reset());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
