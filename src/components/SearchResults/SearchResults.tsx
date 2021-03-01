import React from "react";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import moment from "moment";
import { FaPlus } from "react-icons/fa";
import empty from "../../empty.png";
const SearchResults = (props: any) => {
  const result: any = useSelector<any>(
    (state) => state.album.result?.tracks.items
  );
  return (
    <ListGroup className="text-center">
      <h3>Search Results</h3>
      {result && <h3>Search Result</h3>}
      {result ? (
        result.map((res: any) => (
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
                {`${moment
                  .duration(res.duration_ms)
                  .minutes()}: ${moment.duration(res.duration_ms).seconds()}`}
              </span>
              <Button color="success">
                <FaPlus />
              </Button>
            </span>
          </ListGroupItem>
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
