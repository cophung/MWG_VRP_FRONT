import {
  PROCESSING_ROUTING,
  COMPLETE_PROCESSING_ROUTING,
  ROUTE_NUMBER_PROCESSED,
} from "../constants/constantRoutes";

export const statusRouting = (state = false, action) => {
  switch (action.type) {
    case PROCESSING_ROUTING:
      return true;
    case COMPLETE_PROCESSING_ROUTING:
      return false;
    default:
      return state;
  }
};

export const routeNumberProcessed = (state = 0, action) => {
  switch (action.type) {
    case ROUTE_NUMBER_PROCESSED:
      return action.payload;
    default:
      return state;
  }
};
