import {
  PROCESSING_ROUTING,
  COMPLETE_PROCESSING_ROUTING,
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
