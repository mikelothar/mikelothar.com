import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;

  > div.date {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--theme-color);
  }

  h1 {
    font-size: 3.5rem;
    letter-spacing: 0.9rem;
    text-transform: uppercase;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    max-width: 50rem;
  }
  
  h2 {
    text-align: center;
    font-weight: 300;
    font-size: 2.4rem;
    margin-bottom: 3rem;
    max-width: 50rem;
    color: var(--theme-color);
  }
  
  img {
    max-width: 100%;
  }
`

const Title = ({ titles }) => (
  <TitleWrapper>
    <div className="date">{titles.date}</div>
    <h1>{titles.title}</h1>
    {titles.subtitle ? <h2 dangerouslySetInnerHTML={{ __html: titles.subtitle }}/> : ''}
    {titles.img ? <img src={require('../../../assets/posts/' + titles.img)} alt={titles.title}/> : ''}
    {titles.color ? <style dangerouslySetInnerHTML={{
      __html: `
      body { --theme-color: ${titles.color} }
    `
    }}/> : ''}
  </TitleWrapper>
)

export default Title