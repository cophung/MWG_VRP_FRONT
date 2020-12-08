import { connect } from "react-redux";

import Footer from "../components/Footer";
import { fetchRoutes } from "../actions/actionRoutes";

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => {
      dispatch(fetchRoutes());
    },
  };
};

export default connect(null, mapDispatchToProps)(Footer);
