import React from 'react'
import styled from '@emotion/styled';
import Profile from '../Profile';
import Balance from '../Balance';
import Menu from '../Menu';

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 100vh;
    background: #242424;
    position: fixed;
`;



export default function SideBar() {
  return (
    <SideBarContainer>
        <Profile name="Gabriela Bravo" role="Software Engineer" agency="001" accountNumber="123456789" />
        <Balance amount={190000} />
        <Menu />
         </SideBarContainer> 
  )
}
