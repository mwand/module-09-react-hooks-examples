'use client'; // this app is client-side only.

import * as React from 'react';
import { ChakraProvider} from '@chakra-ui/react';

// import App from './Apps/ToDoApp/ToDoApp'
// import App from './Apps/SimpleClockDisplayApp'
// import App from './Apps/ArrayOfClocksApp'
// import App from './Apps/useEffect-demoWithCleanUps'
// import App from './Apps/SimpleClockDisplayApp'
// import App from './Apps/TwoCountingButtonsInAList/Root'

// below here are addresses under new organization src/Apps/...
// change ./Apps to ../Apps/<appname>/App
// import App from '../Apps/ThreeClocks/App'
// import App from '../Apps/useEffect-demo'
import App from '../Apps/useEffect-demoWithCleanUps'

export default function Root() {
    return (
    <ChakraProvider> 
      <App/>
      </ChakraProvider>)
}