import React from 'react'
import { BoxProps } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
// import { Layout, LayoutMain } from './Layout'

interface IMainLayoutProps extends BoxProps {}

/**
 * @returns Component Main Layout
 */
export const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <Box {...props}>
      {/* <Header /> */}
      <Box>{children}</Box>
    </Box>
  )
}
