import React from 'react'
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import Burger from "./Burger";
import Collapse from "./Collapse";
import ProfileMenu from './ProfileMenu';

const picture = require("./../../../img/meliodas.jpeg");

const Navbar = props => {

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
    });

    return (
        <>
            <NavBar>
                <FlexContainer>
                <Brand />
                <NavLinks style={linkAnimation}>
                    <NavLink to="/">Notifications</NavLink>
                    <ProfileMenu picture={picture}/>
                </NavLinks>
                <BurgerWrapper>
                    <Burger
                    navbarState={props.navbarState} 
                    handleNavbar={props.handleNavbar}
                    />
                </BurgerWrapper>
                </FlexContainer>
            </NavBar>
            <Collapse
                navbarState={props.navbarState} 
                handleNavbar={props.handleNavbar}
            />
        </>
    )
}

export default Navbar;

const NavBar = styled(animated.nav)`
    position: fixed;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    margin: auto 0;
    width: 100%;
    top: 0;
    left: 0;
    background: #2d3436;
    z-index: 1;
    font-size: 1.4rem;
`;

const FlexContainer = styled.div`
    max-width: 120rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 0 2rem;
    height: 5rem;
`;

const NavLinks = styled(animated.ul)`
    display: flex;
    align-items: center;
    justify-self: end;
    list-style-type: none;
    margin: auto 0;

    & a {
        color: #dfe6e9;
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 1px solid transparent;
        margin: 0 1.5rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;

        &:hover {
        color: #fdcb6e;
        border-bottom: 1px solid #fdcb6e;
        }

        @media (max-width: 768px) {
        display: none;
        }
    }
`;

const BurgerWrapper = styled.div`
    margin: auto 0;

    @media (min-width: 769px) {
        display: none;
    }
`;