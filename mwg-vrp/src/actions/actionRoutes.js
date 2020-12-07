import * as constantsRoutes from "../constants/constantRoutes";

export const getAllRoutes = () => {
  return {
    type: constantsRoutes.GET_ALL_ROUTES,
  };
};
