import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { App } from './app/index'

import 'sanitize.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
})

root.render(
  <ChakraBaseProvider theme={theme}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </ChakraBaseProvider>,
)
