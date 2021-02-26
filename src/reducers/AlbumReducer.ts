import { asyncActionName } from "../util/AsyncUtil";
import {
  GET_NEW_RELEASES,
  SEARCH_ALBUMS,
  FETCH_LIBRARY,
} from "../actions/types";

const initialState = {
  newReleases: [],
};

const AlbumReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case asyncActionName(FETCH_LIBRARY).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(FETCH_LIBRARY).success:
      // const library = action.payload.forEach((doc: any) => {
      //   console.log(doc.id, "=>", doc.data());
      // });
      return {
        ...state,
        library: action.payload,
        success: true,
      };
    case asyncActionName(FETCH_LIBRARY).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false,
      };

    case asyncActionName(GET_NEW_RELEASES).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_NEW_RELEASES).success:
      console.log(action.payload);
      return {
        ...state,
        newReleases: action.payload,
        success: true,
      };
    case asyncActionName(GET_NEW_RELEASES).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false,
      };

    case asyncActionName(SEARCH_ALBUMS).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(SEARCH_ALBUMS).success:
      console.log(action.payload);
      return {
        ...state,
        result: action.payload,
        success: true,
      };
    case asyncActionName(SEARCH_ALBUMS).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false,
      };
    default:
      return state;
  }
};

export default AlbumReducer;
