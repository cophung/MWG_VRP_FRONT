import { combineReducers } from "redux";

import reducerTest from "./reducerTest";
import reducerRoutes from "./reducerRoutes";
import reducerOrders from "./reducerOrders";

const rootReducer = combineReducers({
  reducerTest,
  reducerRoutes,
  reducerOrders,
});

export default rootReducer;
