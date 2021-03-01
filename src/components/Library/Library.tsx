import React, { useEffect } from "react";
import Track from "../Tracks/Track";
import { useSelector, useDispatch } from "react-redux";
import { fetchLibrary } from "../../requests/albumRequests";
import { Container } from "reactstrap";
import empty from "../../empty.png";

const Library = (props: any) => {
  const userId: any = useSelector<any>((state) => state.user.user.id);
  const library: any = useSelector<any>((state) => state.album.library);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLibrary(userId));
  }, [userId, dispatch]);

  return (
    <React.Fragment>
      <div className="row">
        {library && library.length !== 0 ? (
          library.map((item: any) => <Track key={item.id} track={item} />)
        ) : (
          <Container>
            <img src={empty} alt="empty search" height={300} />
            <p>
              {" "}
              There's nothing here, Add songs to library to display them here{" "}
            </p>
          </Container>
        )}
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Library;
