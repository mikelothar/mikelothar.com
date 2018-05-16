import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import styled from 'styled-components'
import './app.scss'
import favicon from '../../assets/favicon.ico'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <html className="has-background-info"/>
      <title>Mike Lothar</title>
      <link rel="canonical" href="https://mikelothar.com"/>
      <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
    </Helmet>

    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
