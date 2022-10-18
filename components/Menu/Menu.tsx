import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';

const MenuContainer = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #242424;
  color: #f8f8f8;
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      font-weight: 400;
      font-size: 1.2rem;
      width: 100%;
      display: flex;
      padding-left: 15px;
      list-style: none;
      line-height: 60px;
      border: solid 4px transparent;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      &:hover {
        font-weight: 500;
        background: #888;
        border-left-color: #fffb19;
        padding-left: 25px;
        cursor: pointer;
      }
    }
  }

`
export default function Menu() {
  return (
    <MenuContainer>
      <ul>
        <li>
          <Link href="/">
          {/*<Icon type="home"/> */}
          <a> Início </a>
          </Link>
          </li>
        <li>Extrato</li>
        <li>Transferências</li>
        <li>Pagamentos</li>
        <li>Cartões</li>
        <li>Crédito</li>
      </ul>
    </MenuContainer>
  )
}
