import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Input } from "reactstrap";
import { searchAlbums } from "../../requests/albumRequests";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAlbums(search));
  }, [dispatch, search]);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Input
      type="search"
      onChange={handleSearch}
      placeholder="Search"
      value={search}
    />
  );
};

export default Search;
