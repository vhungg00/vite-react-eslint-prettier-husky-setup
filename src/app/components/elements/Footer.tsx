import { Box } from '@chakra-ui/react'
import React from 'react'
import { LayoutFooter } from './Layout'

const FooterComponent: React.FC = () => <Box as={LayoutFooter}>Footer</Box>

export const Footer = React.memo(FooterComponent)
