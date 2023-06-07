import React from 'react';
//
import ConfigRoute from "./configRoute/Route"
import { ContextProvider } from './context/menu_sidebar';

//components
function App() {
  return (
    <div className="app">
        <ContextProvider>
         <ConfigRoute/>
        </ContextProvider>
    </div>
  );
}

export default App;
