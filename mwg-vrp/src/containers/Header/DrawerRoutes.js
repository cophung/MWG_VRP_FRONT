import { connect } from "react-redux";

import DrawerRoutes from "../../components/Header/DrawerRoutes";
import { fetchRoutes } from "../../actions/actionRoutes";

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerRoutes);
