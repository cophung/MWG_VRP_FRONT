import { connect } from "react-redux";

import DrawerRoutes from "../../components/Header/DrawerRoutes";
import { fetchRoutes, actionSubRoutes } from "../../actions/actionRoutes";

const mapStateToProps = (state) => {
  return {
    routes: state.reducerRoutes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoutes: () => {
      dispatch(fetchRoutes());
    },
    handleSubRoute: (data) => {
      dispatch(actionSubRoutes(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerRoutes);
