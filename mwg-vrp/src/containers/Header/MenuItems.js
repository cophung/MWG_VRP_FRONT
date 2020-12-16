import { connect } from "react-redux";

import MenuItems from "../../components/Header/MenuItems";

const mapStateToProps = (state) => {
  return {
    routeNumberProcessed: state.routeNumberProcessed,
  };
};

export default connect(mapStateToProps, null)(MenuItems);
