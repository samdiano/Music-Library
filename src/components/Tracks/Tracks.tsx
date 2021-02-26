import React, { useEffect } from "react";
import { getNewReleases } from "../../requests/albumRequests";
// import Loader from "../Loader/Loader";
import Track from "./Track";
import { useSelector, useDispatch } from "react-redux";

const Tracks = (props: any) => {
  const album: any = useSelector<any>((state) => state.album);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewReleases());
  }, []);

  return (
    <React.Fragment>
      <h3 className=" mb-4">{"New Releases"}</h3>
      <div className="row">
        {album.newReleases.albums?.items.map((item: any) => (
          <Track key={item.id} track={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Tracks;
