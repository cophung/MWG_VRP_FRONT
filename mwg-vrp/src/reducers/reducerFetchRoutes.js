import _ from "lodash";

import { FETCH_ROUTES } from "../constants/constantRoutes";

const reducerFetchRoutes = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROUTES:
      return _.cloneDeep(action.payload);
    default:
      return state;
  }
};

export default reducerFetchRoutes;
