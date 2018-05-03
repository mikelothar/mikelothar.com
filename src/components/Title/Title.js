import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 1rem;

  > div {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    letter-spacing: 0.9rem;
    text-transform: uppercase;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.75);
    text-align: center;
  }
  
  h2 {
    text-align: center;
    font-weight: 300;
    font-size: 2.4rem;
    margin-bottom: 3rem;
    color: rgba(0, 0, 0, 0.5);
  }
`

const Title = ({ titles }) => (
  <TitleWrapper>
    <div>{titles.date}</div>
    <h1>{titles.title}</h1>
    {titles.subtitle ? <h2 dangerouslySetInnerHTML={{ __html: titles.subtitle }} /> : ''}
  </TitleWrapper>
)

export default Title