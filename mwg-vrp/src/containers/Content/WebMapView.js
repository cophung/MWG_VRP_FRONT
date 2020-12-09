import { connect } from "react-redux";

import WebMapView from "../../components/Content/WebMapView";
import { fetchRoutes } from "../../actions/actionRoutes";

const mapStateToProps = (state) => {
  return {
    routes: state.reducerRoutes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(fetchRoutes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebMapView);
