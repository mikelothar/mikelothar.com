import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const SiteHeader = styled.div`
  background-color: #272828;
  backdrop-filter: saturate(180%) blur(20px);
  
  & .container {
    max-width: 960px;
  }
  
  & a {
    color: #999;  
    transition: ease-in-out color 0.15s;
    
    &.active,
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const Header = () => (
  <SiteHeader className="site-header sticky-top py-1">
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <Link to="/" className="py-2">
        {/*<img style="height: 24px;"*/}
        {/*src="" />*/}
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </span>
      </Link>
      <Link to="/" className="py-2 d-none d-md-inline-block active">Development</Link>
      <Link className="py-2 d-none d-md-inline-block" href="#">Graphics</Link>
      <a className="py-2 d-none d-md-inline-block" href="#">Layouts</a>
      <a className="py-2 d-none d-md-inline-block" href="#">Games</a>
      <a className="py-2 d-none d-md-inline-block" href="#">About</a>
    </div>
  </SiteHeader>
)

export default Header
