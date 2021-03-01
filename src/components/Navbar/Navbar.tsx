import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  InputGroup,
} from "reactstrap";
import { getUserProfile } from "../../requests/userRequests";
import Avatar from "react-avatar";
import Search from "../Search/Search";
import { isAuthenticated } from "../../util/AuthUtil";
import { Link } from "react-router-dom";
const NavBar = () => {
  const user: any = useSelector<any>((state) => state.user.user);
  const state: any = useSelector<any>((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.display_name && isAuthenticated()) dispatch(getUserProfile());
  }, [dispatch, state, user.display_name]);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      {isAuthenticated() && (
        <div className="mb-5">
          <Navbar color="light" light expand="md">
            <div className="container">
              <Link to="/">
                <NavbarBrand>
                  {" "}
                  <Avatar
                    className="mr-5"
                    name={user.display_name}
                    size="50"
                    round={true}
                    src={user.images && user.images[0].url}
                  />
                  {user.display_name}
                </NavbarBrand>
              </Link>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav style={{ width: "50%" }} className="mx-auto" navbar>
                  <InputGroup className="col-12" inline>
                    <Search />
                  </InputGroup>
                  <NavItem>
                    <Link to="/library">
                      <NavLink>Library</NavLink>
                    </Link>
                  </NavItem>
                </Nav>
                <NavbarText>Logout</NavbarText>
              </Collapse>
            </div>
          </Navbar>
        </div>
      )}
    </Fragment>
  );
};

export default NavBar;
