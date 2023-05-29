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

//arraw that points down 
//do the links for the actual website
//do the tailwind css for the menu sidebar
//favicon logo
//do what the guy did for the logo
//do what the guy did for the font
//do what the guy did for the images
//ad view inventory tab once the sections are rebuilt 





//thoughts

//100% sure there is a way more efficient way to handle the sections and the styling for them so if event fux are given do that   PROPS PROPS PROPS
//check out react reveal for the text appeariing nice animation wowow so nice animation 
//lets add the front page gif thing that the actual tesla website has going on
