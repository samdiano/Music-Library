import { asyncActionName } from "../util/AsyncUtil";
import { LOGIN_USER, GET_LOGGED_IN_USER, REGISTER_USER } from "../actions/types";

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
    case asyncActionName(LOGIN_USER).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(LOGIN_USER).success:
      localStorage.token = action.payload.accessToken;
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.accessToken,
        success: true
      };
    case asyncActionName(LOGIN_USER).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
      case asyncActionName(REGISTER_USER).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(REGISTER_USER).success:
      localStorage.token = action.payload.accessToken;
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.accessToken,
        success: true
      };
    case asyncActionName(REGISTER_USER).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    case asyncActionName(GET_LOGGED_IN_USER).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_LOGGED_IN_USER).success:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
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