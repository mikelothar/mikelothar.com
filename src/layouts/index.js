import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import styled, {injectGlobal} from 'styled-components'
import 'typeface-montserrat'
import bg from '../../assets/mikelothar.com.png'

injectGlobal`
  * {
    box-sizing: border-box;
  }
    
  body {
    margin: 625px 0;
    background-color: #272828;
    background: top center url(${bg}) no-repeat;
    background-size: 1560px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template: auto 1fr minmax(1rem, auto) auto / 100%;
	min-height: 100vh;
	//min-height: 1000px;
  font-family: 'Montserrat';
  font-weight: 300;
  // background: #272828;
  width: 1400px;
  margin: 0 auto;
	
	.main {
    order: 2;
    padding: 1rem;
    background-color: #fff;
    //display: none;
  }
`;


const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet>
      <title>Mike Lothar</title>
      <link rel="canonical" href="https://mikelothar.com"/>
    </Helmet>
    <Header/>
    <div className="main">
      {children()}
    </div>
  </Wrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
