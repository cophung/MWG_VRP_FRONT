import { combineReducers } from "redux";

import reducerTest from "./reducerTest";
import reducersRoutes from "./reducerRoutes";

const rootReducer = combineReducers({
  reducerTest,
  reducersRoutes,
});

export default rootReducer;
