import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import './smart-grid.scss'
// import 'bootstrap/dist/css/bootstrap.css'

import './global-styles'
import styled from 'styled-components'

import './index.scss'

import 'typeface-crimson-text'
import 'typeface-montserrat'
import favicon from '../../assets/favicon.ico'

const Wrapper = styled.div`
`;


const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet>
      <title>Mike Lothar</title>
      <link rel="canonical" href="https://mikelothar.com"/>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
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
