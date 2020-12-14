import { connect } from "react-redux";

import WebMapView from "../../components/Content/WebMapView";
import {
  fetchRoutes,
  completeProcessingRouting,
} from "../../actions/actionRoutes";

const mapStateToProps = (state) => {
  return {
    routes: state.reducerRoutes,
    subRoutes: state.reducerSubRoutes,
    allRoutes: state.reducerAllRoutes,
    statusRouting: state.statusRouting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(fetchRoutes());
    },
    completeProcessingRouting: () => {
      dispatch(completeProcessingRouting());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebMapView);
