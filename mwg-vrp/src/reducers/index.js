import { combineReducers } from "redux";

import reducerTest from "./reducerTest";
import reducerFetchRoutes from "./reducerFetchRoutes";
import reducerFetchOrders from "./reducerFetchOrders";
import reducerSubRoutes from "./reducerSubRoutes";
import reducerAllRoutes from "./reducerAllRoutes";
import { statusRouting } from "./reducerStatus";

const rootReducer = combineReducers({
  reducerTest,
  reducerFetchRoutes,
  reducerFetchOrders,
  reducerSubRoutes,
  reducerAllRoutes,
  statusRouting,
});

export default rootReducer;
