import _ from "lodash";

import { FETCH_INITIAL_DETAIL_ORDERS } from "../constants/constantOrders";

const reducersFetchRoutes = (state = [], action) => {
  switch (action.type) {
    case FETCH_INITIAL_DETAIL_ORDERS:
      return _.cloneDeep(action.payload);
    default:
      return state;
  }
};

export default reducersFetchRoutes;
