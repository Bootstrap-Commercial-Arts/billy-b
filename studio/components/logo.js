import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  height: 100%;
  max-height: 75px;
`

const studioLogo = () => {
  return <Logo src="/static/studio-logo.png" alt="Billy B"/>
}

export default studioLogo;