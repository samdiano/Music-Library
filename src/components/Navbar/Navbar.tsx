import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  InputGroup,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-5">
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand href="/">My username</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav style={{ width: "50%" }} className="mx-auto" navbar>
              <InputGroup className="col-12" inline>
                <Input type="search" name="search" placeholder="Search" />
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
