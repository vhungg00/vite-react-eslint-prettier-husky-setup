import React from 'react'
import { Box } from '@chakra-ui/react'
import { LayoutHeader } from './Layout'

const HeaderComponent: React.FC = () => {
  return <Box as={LayoutHeader}>Header</Box>
}

export const Header = React.memo(HeaderComponent)
