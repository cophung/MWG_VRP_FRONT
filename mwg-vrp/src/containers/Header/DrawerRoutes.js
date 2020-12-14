import { connect } from "react-redux";

import DrawerRoutes from "../../components/Header/DrawerRoutes";
import {
  fetchRoutes,
  actionSubRoutes,
  actionRoutes,
  processingRouting,
} from "../../actions/actionRoutes";

const mapStateToProps = (state) => {
  return {
    routes: state.reducerRoutes,
    statusRouting: state.statusRouting,
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
    handleRoutes: (data) => {
      dispatch(actionRoutes(data));
    },
    processingRouting: () => {
      dispatch(processingRouting());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerRoutes);
