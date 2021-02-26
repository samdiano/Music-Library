import { asyncActionName } from "../util/AsyncUtil";
import { GET_LOGGED_IN_USER } from "../actions/types";

const initialState = {
  user: {},
  token: localStorage.token,
  isAuthenticated: null
};

interface Iaction {
    type: string;
    payload: {
        accessToken: string;
        user: string;
        status: boolean;
    }
}

const UserReducer = (state = initialState, action: Iaction) => {
  switch (action.type) {
    case asyncActionName(GET_LOGGED_IN_USER).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_LOGGED_IN_USER).success:
      return {
        ...state,
        user: action.payload,
        success: true
      };
    case asyncActionName(GET_LOGGED_IN_USER).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    default:
      return state;
  }
};

export default UserReducer;