import { asyncActions } from "../util/AsyncUtil";
import {
  GET_NEW_RELEASES,
  SEARCH_ALBUMS,
  FETCH_LIBRARY,
} from "../actions/types";
import { albumsConstant } from "../constants/constants";
import { get } from "../util/Api";
import { toast } from "react-toastify";
import LibraryService from "../services/library.service";
export const getNewReleases = () => async (dispatch: any) => {
  dispatch(asyncActions(GET_NEW_RELEASES).loading(true));
  try {
    const res = await get(`${albumsConstant.GET_NEW_RELEASES_URL}?limit=4`, {});
    if (res.status === 200) {
      dispatch(asyncActions(GET_NEW_RELEASES).success(res.data));
      dispatch(asyncActions(GET_NEW_RELEASES).loading(false));
    }
  } catch (err) {
    if (err.message.substr(err.message.length - 3) === "401")
      toast(
        "Authorization failed: Please try refreshing the page and login again"
      );
    dispatch(asyncActions(GET_NEW_RELEASES).failure(true, err));
  }
};

export const searchAlbums = (q: any) => async (dispatch: any) => {
  dispatch(asyncActions(SEARCH_ALBUMS).loading(true));
  try {
    const res = await get(
      `${albumsConstant.SEARCH_ALBUMS_URL}?q=${q}&type=track`,
      {}
    );
    if (res.status === 200) {
      dispatch(asyncActions(SEARCH_ALBUMS).success(res.data));
      dispatch(asyncActions(SEARCH_ALBUMS).loading(false));
    }
  } catch (err) {
    dispatch(asyncActions(SEARCH_ALBUMS).failure(true, err));
  }
};

export const fetchLibrary = (userId: string) => async (dispatch: any) => {
  dispatch(asyncActions(FETCH_LIBRARY).loading(true));
  try {
    const ref = await LibraryService.getAll().where("userId", "==", userId).get();

    if (ref) {
      dispatch(asyncActions(FETCH_LIBRARY).success(ref));
      dispatch(asyncActions(FETCH_LIBRARY).loading(false));
    }

    // if (res.status === 200) {
    // }
  } catch (err) {
    dispatch(asyncActions(FETCH_LIBRARY).failure(true, err));
  }
};
