import getRoutes from "../services/serviceRoutes";
import { GET_ROUTES } from "../constants/constantRoutes";

const reducersRoutes = (state = [[]], action) => {
  switch (action.type) {
    case GET_ROUTES:
      getRoutes().then((response) => response.data.routes);
      break;
    default:
      return state;
  }
};

export default reducersRoutes;
