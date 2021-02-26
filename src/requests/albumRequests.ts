import { asyncActions } from "../util/AsyncUtil";
import { GET_NEW_RELEASES } from "../actions/types";
import { albumsConstant } from "../constants/constants";
import { get } from "../util/Api";


export const getNewReleases = () => async (dispatch: any) => {
  dispatch(asyncActions(GET_NEW_RELEASES).loading(true));
  try {
    const res = await get(`${albumsConstant.GET_NEW_RELEASES_URL}?limit=4`, {});
    if (res.status === 200) {
      dispatch(asyncActions(GET_NEW_RELEASES).success(res.data));
      dispatch(asyncActions(GET_NEW_RELEASES).loading(false));
    }
  } catch (err) {
    dispatch(asyncActions(GET_NEW_RELEASES).failure(true, err));
  }
};
