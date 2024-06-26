import React from 'react';
import './App.css';
import AppRoutes from './routes.jsx';
import {
  ChakraProvider
} from "@chakra-ui/react";


function App() {

  return (
    <>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;