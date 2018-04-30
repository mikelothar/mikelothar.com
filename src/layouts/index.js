import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

import './global-styles'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

import './index.scss'

// import 'typeface-montserrat'

const Wrapper = styled.div`
`;


const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet>
      <title>Mike Lothar</title>
      <link rel="canonical" href="https://mikelothar.com"/>
    </Helmet>
    <Header/>
    <div className="container">
      {children()}
    </div>
  </Wrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
