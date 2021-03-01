import React from "react";
import Avatar from "react-avatar";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button, ListGroupItem } from "reactstrap";
import moment from "moment";
import { fetchLibrary } from "../../requests/albumRequests";
import { useSelector, useDispatch } from "react-redux";
import LibraryService from "../../services/library.service";
import { toast } from "react-toastify";

const SearchResult = (props: any) => {
  const userId: any = useSelector<any>((state) => state.user.user.id);
  const library: any = useSelector<any>((state) => state.album.library);
  const dispatch = useDispatch();
  const { res } = props;
  res.userId = userId;

  const addToLibrary = () => {
    LibraryService.create(res)
      .then(() => {
        dispatch(fetchLibrary(userId));
        toast("Added to Library successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const removeFromLibrary = () => {
    LibraryService.remove(res.docId)
      .then(() => {
        dispatch(fetchLibrary(userId));
        toast("Removed from library successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const inLibrary = () => {
    const found = library?.find((lib: any) => lib.id === res.id);
    if (found) {
      res.docId = found.docId;
    }
    return found;
  };
  return (
    <ListGroupItem
      className="d-flex justify-content-between align-items-center"
      action
    >
      <span>
        <Avatar
          name={res.album.name}
          size="50"
          className="mr-5"
          round={true}
          src={res.album.images && res.album.images[0].url}
        />
        <span className="mr-5">
          <strong>{res.album.artists[0].name}:</strong> {res.name}
        </span>
      </span>
      <span>
        <span className="mr-5">
          {`${moment.duration(res.duration_ms).minutes()}: ${moment
            .duration(res.duration_ms)
            .seconds()}`}
        </span>
        {inLibrary() ? (
          <Button onClick={removeFromLibrary} color="danger">
            <FaMinus />
          </Button>
        ) : (
          <Button onClick={addToLibrary} color="success">
            <FaPlus />
          </Button>
        )}
      </span>
    </ListGroupItem>
  );
};

export default SearchResult;
