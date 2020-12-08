import { combineReducers } from "redux";

import reducerTest from "./reducerTest";
import reducerRoutes from "./reducerRoutes";

const rootReducer = combineReducers({
  reducerTest,
  reducerRoutes,
});

export default rootReducer;
