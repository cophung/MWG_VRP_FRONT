import * as constantsRoutes from "../constants/constantRoutes";
import { serFetchRoutes } from "../services/serviceRoutes";

export const receiveRoutes = (json) => {
  return {
    type: constantsRoutes.FETCH_ROUTES,
    payload: json,
  };
};

export function fetchRoutes() {
  return (dispatch) => {
    return serFetchRoutes()
      .then((response) => {
        dispatch(receiveRoutes(response.data.routes));
      })
      .catch((error) => console.log("FetchRoutes Axios Error", error));
  };
}
