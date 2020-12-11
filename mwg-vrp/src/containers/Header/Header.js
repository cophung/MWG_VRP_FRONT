import { connect } from "react-redux";

import Header from "../../components/Header/Header";
import { fetchInitialDetailOrders } from "../../actions/actionOrders";
import {
  processingRouting,
  completeProcessingRouting,
} from "../../actions/actionRoutes";

const mapStateToProps = (state) => {
  return {
    initialOrders: state.reducerOrders,
    statusRouting: state.statusRouting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialDetailOrder: () => {
      dispatch(fetchInitialDetailOrders());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
