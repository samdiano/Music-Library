import React from "react";
import { Button } from "reactstrap";

const Index = () => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location.href = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="border border-light p-3 mb-4">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "700px" }}
      >
        <div className="p-2 bd-highlight col-example">
          <h1 className="mb-5">My Library</h1>
          <Button color="primary" onClick={handleLogin}>
            Login To Spotify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
