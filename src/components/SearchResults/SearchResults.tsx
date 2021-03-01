import React from "react";
import { useSelector } from "react-redux";
import { Container, ListGroup } from "reactstrap";
import empty from "../../empty.png";
import SearchResult from "./SearchResult";
const SearchResults = (props: any) => {
  const result: any = useSelector<any>(
    (state) => state.album.result?.tracks.items
  );
  return (
    <ListGroup className="text-center">
      <h3>Search Result</h3>
      {result ? (
        result.map((res: any) => (
          <SearchResult res={res} />
        ))
      ) : (
        <Container>
          <img src={empty} alt="empty search" height={300}  />
          <p> There's nothing here,  Search for a song to display them here  </p>
        </Container>
      )}
    </ListGroup>
  );
};

export default SearchResults;
