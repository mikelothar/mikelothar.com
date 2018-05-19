import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../../assets/m.svg'

const SiteHeader = styled.nav `
`

const StyledLink = styled(Link)`
`

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array
    .prototype
    .slice
    .call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers
      .forEach(function ($el) {
        $el
          .addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el
              .classList
              .toggle('is-active');
            $target
              .classList
              .toggle('is-active');

          });
      });
  }
});

const Header = () => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={logo}
              alt="Mike Lothar"
              style={{
              marginRight: '20px'
            }}/>
            Mike Lothar
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/development" activeClassName="is-active">Development</Link>
            <Link className="navbar-item" to="/graphics" activeClassName="is-active">Graphics</Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
