import React, { useEffect } from "react";
import { getNewReleases, fetchLibrary } from "../../requests/albumRequests";
// import Loader from "../Loader/Loader";
import Track from "./Track";
import { useSelector, useDispatch } from "react-redux";

const Tracks = (props: any) => {
  const album: any = useSelector<any>((state) => state.album);
  const userId: any = useSelector<any>((state) => state.user.user.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewReleases());
    dispatch(fetchLibrary(userId));
  }, [dispatch, userId]);

  return (
    <React.Fragment>
      <h3 className=" mb-4">{"New Releases"}</h3>
      <div className="row">
        {album.newReleases.albums?.items.map((item: any) => (
          <Track key={item.id} track={item} />
        ))}
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Tracks;
