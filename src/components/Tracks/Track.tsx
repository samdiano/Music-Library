import React from "react";
import { Button } from "reactstrap";
import LibraryService from "../../services/library.service";
import { useSelector, useDispatch } from "react-redux";
import { fetchLibrary } from "../../requests/albumRequests";
import { toast } from "react-toastify";
const truncate = (str: string) => {
  return str.length > 18 ? str.substr(0, 18) + "..." : str;
};

const Track = (props: any) => {
  const userId: any = useSelector<any>((state) => state.user.user.id);
  const library: any = useSelector<any>((state) => state.album.library);
  const loading: any = useSelector<any>((state) => state.album.loading);
  const dispatch = useDispatch();
  const { track } = props;
  track.userId = userId;
  const addToLibrary = () => {
    LibraryService.create(track)
      .then(() => {
        dispatch(fetchLibrary(userId));
        toast("Added to Library successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const removeFromLibrary = () => {
    LibraryService.remove(track.docId)
      .then(() => {
        dispatch(fetchLibrary(userId));
        toast("Removed from library successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const inLibrary = () => {
    const found = library?.find((lib: any) => lib.id === track.id);
    if (found) {
      track.docId = found.docId;
    }
    return found;
  };
  return (
    <div className="col-md-3">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <img
            className="mb-2"
            width="100%"
            alt="cover"
            src={track.images[0].url}
          />
          <h5 className="card-text">
            {truncate(track.name)}
            <br />
          </h5>
          <span>
            {inLibrary() ? (
              <Button color="danger" className="btn btn-block">
                <span onClick={removeFromLibrary} className="mr-3">
                  {loading ? " Loading..." : "Remove from Library"}
                </span>
              </Button>
            ) : (
              <Button color="primary" className="btn btn-block">
                <span onClick={addToLibrary} className="mr-3">
                  {loading ? " Loading..." : "Add To Library"}
                </span>
              </Button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;
