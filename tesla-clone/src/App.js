import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import ModelS from './components/ModelS'
import ModelY from './components/ModelY'
import Model3 from './components/Model3'
import ModelX from './components/ModelX'
import SolarPanels from './components/SolarPanels'
import SolarRoof from './components/SolarRoof'
import Accessories from './components/Accessories'




function App() {
  return (
    <div className = 'App'>


      <div className='home-n-header'>
       <Header />
      <Home />
      </div>
      
      <ModelS />
      <ModelY />
      <Model3 />
      <ModelX />
      <SolarPanels /> 
      <SolarRoof />  
      <Accessories />
    </div>
  );
}

export default App;


//todo

//create secitons for rest of products
