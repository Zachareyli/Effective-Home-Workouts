import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SideElement';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>Why do it?</SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Lets Start</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                {/* <SidebarLink to='sign-up' onClick={toggle}>Sign-Up</SidebarLink> */}
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
)};

export default SideBar