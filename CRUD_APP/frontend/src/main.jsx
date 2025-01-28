/* eslint-disable no-unused-vars */
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
   <Provider>
   <ColorModeProvider>
    <App />
    </ColorModeProvider>
   </Provider>    
  </BrowserRouter>
</React.StrictMode>,
)
