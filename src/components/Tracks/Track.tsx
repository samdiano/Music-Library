import React from "react";
import { Button } from "reactstrap";
import { FaPlus } from "react-icons/fa";

const truncate = (str: string) => {
  return str.length > 18 ? str.substr(0, 18) + "..." : str;
};

const Track = (props: any) => {
  const { track } = props;
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
               <span className="mr-3">Save to Library</span>
              <FaPlus />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;
