import { combineReducers } from "redux";

import reducerTest from "./reducerTest";
import reducerRoutes from "./reducerRoutes";
import reducerOrders from "./reducerOrders";
import reducerSubRoutes from "./reducerSubRoutes";
import reducerAllRoutes from "./reducerAllRoutes";
import { statusRouting } from "./reducerStatus";

const rootReducer = combineReducers({
  reducerTest,
  reducerRoutes,
  reducerOrders,
  reducerSubRoutes,
  reducerAllRoutes,
  statusRouting,
});

export default rootReducer;
