import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
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