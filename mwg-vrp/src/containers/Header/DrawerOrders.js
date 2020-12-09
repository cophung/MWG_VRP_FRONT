import { connect } from "react-redux";

import DrawerOrders from "../../components/Header/DrawerOrders";
import { fetchInitialDetailOrders } from "../../actions/actionOrders";

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

export default connect(mapStateToProps, mapDispatchToProps)(DrawerOrders);
