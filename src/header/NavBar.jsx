import React from "react";
import './NavBar.css';

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
  DropdownItem } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className=" espace ">
        <Navbar fixed="top" className="colornav tailleText" dark expand="md">
          <NavbarBrand href="/reacteurs"><img className="pr-3" src="http://image.noelshack.com/fichiers/2018/44/2/1540892331-logo1.png" alt="Logo"/>Lorion'Express !</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-light" nav caret>
                ☎
                </DropdownToggle>
                <DropdownMenu right className="text-center">
                <DropdownItem>
                  Lorion-Express@hotmail.fr
                </DropdownItem>
                <DropdownItem>
                  06.78.65.65.89
                </DropdownItem>
                <DropdownItem>
                68 Cours de Verdun,33000 Bordeaux
                </DropdownItem>
                <DropdownItem>
                  <a href="#contact">Plus d'informations !</a>
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
  
export default NavBar;