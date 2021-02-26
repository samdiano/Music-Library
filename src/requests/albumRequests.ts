import { asyncActions } from "../util/AsyncUtil";
import { GET_NEW_RELEASES, SEARCH_ALBUMS } from "../actions/types";
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

export const searchAlbums = (q: any) => async (dispatch: any) => {
  dispatch(asyncActions(SEARCH_ALBUMS).loading(true));
  try {
    const res = await get(`${albumsConstant.SEARCH_ALBUMS_URL}?q=${q}&type=track`, {});
    if (res.status === 200) {
      dispatch(asyncActions(SEARCH_ALBUMS).success(res.data));
      dispatch(asyncActions(SEARCH_ALBUMS).loading(false));
    }
  } catch (err) {
    dispatch(asyncActions(SEARCH_ALBUMS).failure(true, err));
  }
};

