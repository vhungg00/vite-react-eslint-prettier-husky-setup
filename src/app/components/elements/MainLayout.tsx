import React from 'react'
import { BoxProps } from '@chakra-ui/react'
import { Layout, LayoutMain } from './Layout'
import { Header } from './Header'
import { Footer } from './Footer'

/**
 * @returns Component Main Layout
 */
export const MainLayout: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <Header />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
    </Layout>
  )
}
