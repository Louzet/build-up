import React, { useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import styled from "styled-components";

import Brand from "../components/Navbar/Brand";
import ProfileMenu from "../components/Navbar/ProfileMenu";

const NavbarMDB = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Navbar color="default-color" dark expand="md">
            <MDBNavbarBrand>
            <strong className="white-text">
                <Brand />
            </strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={handleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav left>
                <MDBNavItem active>
                    <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!">Features</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#!">Pricing</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <div className="d-none d-md-inline">Dropdown</div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBDropdown dropdown>
                        <MDBDropdownToggle nav >
                            <ProfileMenu />
                        </MDBDropdownToggle>
                        <DropdownMenu className="dropdown-default">
                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem className="bg-danger" color="danger" href="#!">
                                Deconnexion
                            </MDBDropdownItem>
                        </DropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </MDBNavbarNav>
            </MDBCollapse>
        </Navbar>
    )
}

export default NavbarMDB;

const Navbar = styled(MDBNavbar)`
    background-color:  #263747 !important;
`;

const DropdownMenu = styled(MDBDropdownMenu)`
    transform: translate3d(-75px, 59px, 0px) !important;
`;