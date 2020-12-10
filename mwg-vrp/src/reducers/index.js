import { combineReducers } from "redux";

import reducerTest from "./reducerTest";
import reducerRoutes from "./reducerRoutes";
import reducerOrders from "./reducerOrders";
import reducerSubRoutes from "./reducerSubRoutes";

const rootReducer = combineReducers({
  reducerTest,
  reducerRoutes,
  reducerOrders,
  reducerSubRoutes,
});

export default rootReducer;
