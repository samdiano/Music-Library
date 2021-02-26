import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import NewReleases from "../Tracks/Tracks";

const Index = () => {
  return (
    <React.Fragment>
      <NewReleases />
      <SearchResults />
    </React.Fragment>
  );
};

export default Index;
