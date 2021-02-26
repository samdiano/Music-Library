import React, { useState, useEffect } from "react";
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

const NavBar = () => {
  const user: any = useSelector<any>((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-5">
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">
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
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav style={{ width: "50%" }} className="mx-auto" navbar>
              <InputGroup className="col-12" inline>
                <Search />
              </InputGroup>
              <NavItem>
                <NavLink href="/components/">Library</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Logout</NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
