import { connect } from "react-redux";

import WebMapView from "../components/WebMapView";
import { getAllRoutes } from "../actions/actionRoutes";

const mapStateToProps = (state) => {
  return {
    routes: state.reducersRoutes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllRoutes: () => {
      dispatch(getAllRoutes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebMapView);
