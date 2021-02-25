import React from "react";
import { Button } from "reactstrap";

const Index = () => {
  return (
    <div className="border border-light p-3 mb-4">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "700px" }}
      >
        <div className="p-2 bd-highlight col-example">
          <h1 className="mb-5">My Library</h1>
          <Button color="primary">Login To Spotify</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
