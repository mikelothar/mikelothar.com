import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import styled, {injectGlobal} from 'styled-components'
import 'typeface-montserrat'
import 'bootstrap/dist/css/bootstrap.css'

injectGlobal`
  .container {
    max-width: 960px;
  }
`;

const Wrapper = styled.div`

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
