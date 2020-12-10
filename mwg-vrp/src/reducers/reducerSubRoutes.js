import { GET_SUB_ROUTE_IN_ORIGINAL_ROUTES } from "../constants/constantRoutes";

const reducerSubRoutes = (state = [], action) => {
  switch (action.type) {
    case GET_SUB_ROUTE_IN_ORIGINAL_ROUTES:
      return action.payload;
    default:
      return state;
  }
};

export default reducerSubRoutes;
