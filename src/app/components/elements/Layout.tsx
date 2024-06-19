import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

import styled from '@emotion/styled'

const Wrapper = styled(Box)`
  display: grid;
  grid-template: 'header' 'main' 'footer';
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
`

export const LayoutHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 56px;
  max-height: 56px;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
`

export const LayoutMain = styled.main`
  grid-area: main;
  background: #fff;
  height: 100%;
  overflow: hidden;
`

export const LayoutFooter = styled.footer`
  grid-area: footer;
  background: #fff;
  height: 100%;
`

export const Layout: React.FC<BoxProps> = ({
  children,
  ...props
}): JSX.Element => <Wrapper {...props}>{children}</Wrapper>
