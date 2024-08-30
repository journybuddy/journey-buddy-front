import styled from "@emotion/styled";
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

export const NavbarWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F6F6F6;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1100;
`;

export const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer; 
    margin-left: 20px;
    svg {
        margin: 0px;
    }
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
`;

export const NavItemWrap = styled(NavLink)`
    font-family: 'GmarketSansMedium';
    display: flex;
    align-items: center;
    margin: 0 70px;
    color: #333;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    
    &.active {
        background-color: white;
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
    
    .icon {
        margin-right: 5px;
    }
`;

export const ProfilePicWrap = styled.div<{ profileUrl?: string }>`
    margin-right: 60px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-image: ${({ profileUrl }) => `url(${profileUrl})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer; 
`;

export const StyledAvatar = styled(Avatar)`
    width: 45px;
    height: 45px;
    
    .MuiSvgIcon-root {
        width: 40px;
        height: 40px;
    }
`;
