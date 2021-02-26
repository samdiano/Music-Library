import React from "react";
import { Button } from "reactstrap";
import { FaPlus } from "react-icons/fa";
import { constant } from "lodash";
import LibraryService from "../../services/library.service";
import { useSelector } from "react-redux";
import { fetchLibrary } from "../../requests/albumRequests";
import { toast } from "react-toastify";
const truncate = (str: string) => {
  return str.length > 18 ? str.substr(0, 18) + "..." : str;
};

const Track = (props: any) => {
  const userId: any = useSelector<any>((state) => state.user.user.id);
  const { track } = props;
  track.userId = userId;
  const addToLibrary = () => {
    LibraryService.create(track)
      .then(() => {
        // setSubmitted(true);
        fetchLibrary(userId);
        alert("added to firestore");
      })
      .catch((e) => {
        console.log(e);
      });
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
            <Button color="primary" className="btn btn-block">
              <span onClick={addToLibrary} className="mr-3">
                Save to Library
              </span>
              <FaPlus />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;
