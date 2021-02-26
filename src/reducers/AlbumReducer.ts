import { asyncActionName } from "../util/AsyncUtil";
import { GET_NEW_RELEASES} from "../actions/types";

const initialState = {
  newReleases: []
};



const AlbumReducer = (state = initialState, action: any) => {
  switch (action.type) {
    
    case asyncActionName(GET_NEW_RELEASES).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(GET_NEW_RELEASES).success:
        console.log(action.payload)
      return {
        ...state,
        newReleases: action.payload,
        success: true
      };
    case asyncActionName(GET_NEW_RELEASES).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    default:
      return state;
  }
};

export default AlbumReducer;