import React, { useEffect } from "react";
import Track from "../Tracks/Track";
import { useSelector, useDispatch } from "react-redux";
import { getNewReleases } from "../../requests/albumRequests";

const Library = (props: any) => {
  const album: any = useSelector<any>((state) => state.album);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewReleases());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h3 className=" mb-4">{"My Library"}</h3>
      <div className="row">
        {album.newReleases.albums?.items.map((item: any) => (
          <Track key={item.id} track={item} />
        ))}
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Library;
