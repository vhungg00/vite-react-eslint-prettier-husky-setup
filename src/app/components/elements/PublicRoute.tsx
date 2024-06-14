import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/layout'
import { MainLayout } from './MainLayout'

/**
 * @returns PublicRoute component
 */
export const PublicRoute = () => {
  return (
    <MainLayout>
      <Box>
        <Outlet />
      </Box>
    </MainLayout>
  )
}
