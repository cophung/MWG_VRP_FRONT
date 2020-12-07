import _ from "lodash";

import getAllRoutes from "../services/serviceRoutes";
import { GET_ALL_ROUTES } from "../constants/constantRoutes";

const reducersRoutes = (state = [[]], action) => {
  switch (action.type) {
    case GET_ALL_ROUTES:
      break;
    default:
      getAllRoutes()
        .then((response) => {
          const dataRoutes = response.data.routes;
          return dataRoutes;
        })
        .then((dataRoutes) => {
          state = _.cloneDeep(dataRoutes);
          console.log(state);
        });
      return state;
  }
};

export default reducersRoutes;
