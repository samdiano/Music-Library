import React from "react";
import { Button } from "reactstrap";

const truncate = (str: string) => {
    return (str.length > 18) ? str.substr(0, 18) + "..." : str;
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
          <Button className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right"></i> Save to Library
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Track;
