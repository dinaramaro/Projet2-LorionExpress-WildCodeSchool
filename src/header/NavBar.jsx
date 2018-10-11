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
        <Navbar fixed="top" className="colornav tailleText" light expand="md">
          <NavbarBrand href="/"><img className="pr-3" src="http://image.noelshack.com/fichiers/2018/41/3/1539179158-logo1.png" alt="Logo"/>Lorion-Express !</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-dark" href="#destinations">Destinations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" href="#experiences">Expériences</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-dark" href="#promotions">Promotions</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-dark" nav caret>
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