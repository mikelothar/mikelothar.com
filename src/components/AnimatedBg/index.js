import React from 'react'
import styled from 'styled-components'
import {injectGlobal} from 'styled-components'

injectGlobal `
  .animated-bg-parent {
    position: relative;
  }  
`
const Bg = styled.div `
  position: absolute;
  top: 3.25rem;
  left: 0;
  bottom: 0;
  right: 0;
  background: no-repeat center center;
  background-size: cover;
  opacity: 0.2;
  opacity: 1;
  background-image: url(${props => props.bg
  ? require('../../../assets/animated-bg/' + props.bg)
  : require('../../../assets/animated-bg/cat-typing.gif')});
`

const AnimatedBg = ({bg}) => (<Bg bg={bg}/>)

export default AnimatedBg
