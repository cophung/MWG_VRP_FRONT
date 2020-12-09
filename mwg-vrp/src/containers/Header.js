import { connect } from "react-redux";

import Header from "../components/Header";
import { fetchInitialDetailOrders } from "../actions/actionOrders";

const mapStateToProps = (state) => {
  return {
    initialOrders: state.reducerOrders,
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
