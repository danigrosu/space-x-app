import React from 'react';
import 'normalize.css';
import '@progress/kendo-theme-material/dist/all.css';
import './App.scss';
import Frame from './Frame';
import { AppProvider } from './context/AppContext';

const App = () => {
    return(
      <AppProvider>
        <Frame />
      </AppProvider>
    )
  };
export default App;