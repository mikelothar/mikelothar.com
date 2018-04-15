import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import styled from 'styled-components'
import 'typeface-montserrat'

const Wrapper = styled.div`
  // general styles
  font-family: 'Montserrat';
  font-weight: 300;
  background: #272828;
  
  .container {
    margin: 0 auto;
    max-width: 800px;
  }
`;


const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet>
      <title>Mike Lothar</title>
      <link rel="canonical" href="https://mikelothar.com"/>
    </Helmet>
    <Header/>
    <div
      className="container"
      style={{
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </Wrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
