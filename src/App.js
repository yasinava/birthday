import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import "./App.css";
import LandingPage from './components/LandingPage';
import DataContextProvider from './components/context/DataContextProvider';
const App = () => {
  return (
    <DataContextProvider>
    <div className="app position-sm-fixed overflow-auto">
      <div className='appwidth m-5 mt-5'>
      <Routes>
        <Route path='*' element={<LandingPage/>}/>
      </Routes>
      </div>
    </div>
    </DataContextProvider>
  );
};

export default App;