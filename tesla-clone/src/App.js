import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Model from './components/Model'


function App() {
  return (





    <div className = 'App'>


      <div className='home-n-header'>
       <Header />
      <Home />
      </div>

      <Model 
        title='Model 3'
        description='View Inventory'
        background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD'
        leftBtnText='Order Now'
        rightBtnText='Demo Drive'

      />
      <Model 
       title='Model Y'
       description='View Inventory'
       background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop'
       leftBtnText='Order Now'
       rightBtnText='Demo Drive'
/>
      <Model 

       title='Model S'
       description='View Inventory'
       background='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop'
       leftBtnText='Order Now'
       rightBtnText='Demo Drive'
/>
      <Model 

       title='Model X'
       description='View Inventory'
       background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD'
       leftBtnText='Order Now'
       rightBtnText='Demo Drive'
/>
      <Model 
       title='Solar Panels'
       description='Lowest Cost Solar Panels In America'
       background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D'
       leftBtnText='Order Now'
       rightBtnText='Demo Drive'
/>
      <Model 
        title='Solar Roof'
        description='Produce Clean Energy From Your Roof'
        background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global'
        leftBtnText='Order Now'
        rightBtnText='Demo Drive'
        />

<Model 
        title='Accessories'
        background='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Desktop_Accessories'
        leftBtnText='Order Now'
        rightBtnText='Demo Drive'
        />

    </div>
  );
}

export default App;


//todo

//do the tailwind css for the menu sidebar
//do what the guy did for the logo
//get rid of the chevron on accessories 
//fix height of all sections its too short
//add remaining links 





//thoughts

//100% sure there is a way more efficient way to handle the sections and the styling for them so if event fux are given do that   PROPS PROPS PROPS
//check out react reveal for the text appeariing nice animation wowow so nice animation 
//lets add the front page gif thing that the actual tesla website has going on
//would be sick to figure out how to implement the gif tesla uses on their home page
