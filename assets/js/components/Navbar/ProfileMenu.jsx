import React from 'react';
import styled from "styled-components";



const ProfileMenu = ({ picture }) => {

    const Dot = styled.div`
    height: 35px;
    width: 35px;
    margin-right: 0.6rem;
    background: url(${picture}) no-repeat center;
    border-radius: 40%;
    -webkit-border-radius: 40%;
    -moz-border-radius: 40%;
    border: 2px solid #bbb;
    background-size: cover;
`;

    return (
        <Flex>
            <Dot />
            <Caret className="caret caret-up"></Caret>
        </Flex>
    )
}

export default ProfileMenu;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const Caret = styled.span`
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px solid #bbb;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    border-bottom-style: 0;
    color: #bbb;
`;

