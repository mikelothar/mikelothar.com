import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../../assets/mikelothar-logo.svg'

const SiteHeader = styled.nav`
  text-transform: uppercase;
  background-color: #272828;
  backdrop-filter: saturate(180%) blur(20px);
  
  & .container {
    max-width: 960px;
    align-items: center;
  }
  
  & a {
    color: #919191;  
    transition: ease-in-out color .15s;
    border-right: 1px solid #373737;
    
    &.active,
    &:hover {
      color: #FFF9EB;
      text-decoration: none;
    }
  }
    
  .px-4 {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
  
  img {
    height: 50px;
  }
`;

const Header = () => (
  <SiteHeader className="">
    <div className="container">
      <img src={logo} alt=""/>
      <Link exact to="/"
            activeClassName='active'
            className="">Home</Link>
      <Link to="/development"
            activeClassName='active'
            className="">Development</Link>
      <Link to="/graphics"
            activeClassName='active'
            className="" href="#">Graphics</Link>
    </div>
  </SiteHeader>
);

export default Header
