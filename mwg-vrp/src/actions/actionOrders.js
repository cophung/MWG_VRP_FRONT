import * as constantOrders from "../constants/constantOrders";
import { serFetchInitialDetailOrders } from "../services/serviceInitialDetailOrders";

export const receiveInitialDetailOrders = (json) => {
  return {
    type: constantOrders.FETCH_INITIAL_DETAIL_ORDERS,
    payload: json,
  };
};

export function fetchInitialDetailOrders() {
  return (dispatch) => {
    return serFetchInitialDetailOrders()
      .then((response) => {
        dispatch(receiveInitialDetailOrders(response.data.orders));
      })
      .catch((error) =>
        console.log("Fetch Initial Detail Orders Axios Error", error)
      );
  };
}
