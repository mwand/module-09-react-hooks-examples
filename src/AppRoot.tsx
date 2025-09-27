import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

// Import the app used in src/app/page.tsx. Adjust path if you want another example app.
import App from './Apps/ArrayOfClocks/App'

export default function AppRoot() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}
