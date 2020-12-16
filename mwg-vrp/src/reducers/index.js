import { combineReducers } from "redux";

import reducerTest from "./reducerTest";
import reducerFetchRoutes from "./reducerFetchRoutes";
import reducerFetchOrders from "./reducerFetchOrders";
import reducerSubRoutes from "./reducerSubRoutes";
import reducerAllRoutes from "./reducerAllRoutes";
import { statusRouting, routeNumberProcessed } from "./reducerStatus";

const rootReducer = combineReducers({
  reducerTest,
  reducerFetchRoutes,
  reducerFetchOrders,
  reducerSubRoutes,
  reducerAllRoutes,
  statusRouting,
  routeNumberProcessed,
});

export default rootReducer;
