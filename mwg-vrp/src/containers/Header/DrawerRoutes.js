import { connect } from "react-redux";

import DrawerRoutes from "../../components/Header/DrawerRoutes";
import {
  fetchRoutes,
  actionSubRoutes,
  actionRoutes,
  processingRouting,
  routeNumberProcessed,
} from "../../actions/actionRoutes";

const mapStateToProps = (state) => {
  return {
    routes: state.reducerFetchRoutes,
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
      dispatch(actionRoutes([]));
    },
    handleRoutes: (data) => {
      dispatch(actionRoutes(data));
    },
    processingRouting: (number) => {
      dispatch(processingRouting());
      dispatch(routeNumberProcessed(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerRoutes);
