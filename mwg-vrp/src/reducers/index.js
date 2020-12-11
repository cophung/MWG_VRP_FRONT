import { combineReducers } from "redux";

import reducerTest from "./reducerTest";
import reducerRoutes from "./reducerRoutes";
import reducerOrders from "./reducerOrders";
import reducerSubRoutes from "./reducerSubRoutes";
import { statusRouting } from "./reducerStatus";

const rootReducer = combineReducers({
  reducerTest,
  reducerRoutes,
  reducerOrders,
  reducerSubRoutes,
  statusRouting,
});

export default rootReducer;
