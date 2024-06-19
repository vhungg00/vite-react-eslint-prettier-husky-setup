import React from 'react'
import { useRoutes } from 'react-router-dom'
import { PublicRoute } from './components/elements/PublicRoute'
import { PathUrl } from '@/types/ScreenPath'
import { ScrollToTop } from './components/elements/ScrollToTop'
import { GlobalStyle } from './components/elements/GlobalStyle'

/**
 * Routers for app
 * */
export const App: React.FC = () => {
  const elementApp = useRoutes([
    {
      element: <PublicRoute />,
      children: [
        {
          path: PathUrl.HOME,
          element: '',
        },
        {
          path: PathUrl.NOTFOUND,
          element: '',
        },
        {
          path: PathUrl.PRODUCTS,
          element: '',
        },
      ],
    },
  ])

  return (
    <React.Fragment>
      {elementApp}
      <GlobalStyle />
      <ScrollToTop />
    </React.Fragment>
  )
}
