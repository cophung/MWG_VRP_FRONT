import { connect } from "react-redux";

import WebMapView from "../components/WebMapView";
import { GET_ROUTES } from "../constants/constantRoutes";

const mapStateToProps = (state) => {
  return {
    routes: state.reducersRoutes,
  };
};

export default connect(mapStateToProps, null)(WebMapView);
