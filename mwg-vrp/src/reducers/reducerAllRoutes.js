import { GET_ALL_ROUTES } from "../constants/constantRoutes";

const reducerAllRoutes = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ROUTES:
      return action.payload;
    default:
      return state;
  }
};

export default reducerAllRoutes;
