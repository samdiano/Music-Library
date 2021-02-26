import { asyncActions } from "../util/AsyncUtil";
import { GET_LOGGED_IN_USER } from "../actions/types";
import { usersConstant } from "../constants/constants";
import { get } from "../util/Api";


export const getUserProfile = () => async (dispatch: any) => {
  dispatch(asyncActions(GET_LOGGED_IN_USER).loading(true));
  try {
    const res = await get(`${usersConstant.GET_USER_PROFILE}`, {});
    if (res.status === 200) {
      dispatch(asyncActions(GET_LOGGED_IN_USER).success(res.data));
      dispatch(asyncActions(GET_LOGGED_IN_USER).loading(false));
    }
  } catch (err) {
    dispatch(asyncActions(GET_LOGGED_IN_USER).failure(true, err));
  }
};
