import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../../assets/mikelothar-logo.svg'

const SiteHeader = styled.nav`
  order: 1;
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  
	@media (min-width: 40rem) {
		grid-column: span 8;
	}
	
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  
  @media (min-width: 40rem) {
    flex-direction: row;
    position: fixed;
    height: 5rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
	
  text-transform: uppercase;
  //background-color: #272828;
  //background-color: #2c2c2c;
  backdrop-filter: saturate(180%) blur(20px);
  //border: 1px solid red;
      
  img {
    height: 50px;
  }
`;

const StyledLink = styled(Link)`
  color: #919191;  
  transition: ease-in-out all .2s;
  margin-left: 50px;
  text-decoration: none;
  padding: 10px 10px 0;
  border-bottom: 10px solid transparent;
  border-top: 3px solid transparent;
  
  &.active,
  &:hover {
    color: #FFF9EB;
  }
  
  &.active {
    position: relative;
    top: 5px;
    border-top: 12px solid transparent;
    border-bottom: 3px solid #C6A64E;
    padding: 0px 10px 10px;
    transform: translateY(-5px);
  }
  
  &:after {
    content: "";
    position: relative;
    border-right: 1px solid #373737;;
    left: 35px;
    padding: 10px 0;
  }
`;

const Header = () => (
  <SiteHeader>
    <img src={logo} alt=""/>
    <StyledLink exact to="/" activeClassName="active">Home</StyledLink>
    <StyledLink to="/development" activeClassName="active">Development</StyledLink>
    <StyledLink to="/graphics" activeClassName="active">Graphics</StyledLink>
  </SiteHeader>
);

export default Header
