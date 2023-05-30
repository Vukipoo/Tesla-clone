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
        description=<p><a href='https://www.tesla.com/inventory/new/m3'>View Inventory</a></p>
        background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD'
        leftBtnText=<p><a href='https://www.tesla.com/model3/design#overview'>Order Now</a></p>
        rightBtnText=<p><a href='https://www.tesla.com/drive?selectedModel=model3'>Demo Drive</a></p>

      />
      <Model 
       title='Model Y'
       description=<p><a href='https://www.tesla.com/inventory/new/my'>View Inventory</a></p>
       background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop'
       leftBtnText=<p><a href='https://www.tesla.com/modely/design#overview'>Order Now</a></p>
       rightBtnText=<p><a href='https://www.tesla.com/drive?selectedModel=modely'>Demo Drive</a></p>
/>
      <Model 

       title='Model S'
       description=<p><a href='https://www.tesla.com/inventory/new/ms'>View Inventory</a></p>
       background='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop'
       leftBtnText=<p><a href='https://www.tesla.com/models/design#overview'>Order Now</a></p>
       rightBtnText=<p><a href='https://www.tesla.com/drive?selectedModel=models'>Demo Drive</a></p>
/>
      <Model 

       title='Model X'
       description=<p><a href='https://www.tesla.com/inventory/new/mx'>View Inventory</a></p>
       background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD'
       leftBtnText=<p><a href='https://www.tesla.com/modelx/design#overview'>Order Now</a></p>
       rightBtnText=<p><a href='https://www.tesla.com/drive?selectedModel=modelx'>Demo Drive</a></p>
/>
      <Model 
       title='Solar Panels'
       description='Lowest Cost Solar Panels In America'
       background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D'
       leftBtnText=<p><a href='https://www.tesla.com/energy/design'>Order Now</a></p>
       rightBtnText=<p><a href='https://www.tesla.com/solarpanels'>Learn More</a></p>
/>
      <Model 
        title='Solar Roof'
        description='Produce Clean Energy From Your Roof'
        background='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global'
        leftBtnText=<p><a href='https://www.tesla.com/solarroof/design'>Order Now</a></p>
        rightBtnText=<p><a href='https://www.tesla.com/solarroof'>Learn More</a></p>
        />

<Model 
        title='Accessories'
        background='https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Desktop_Accessories'
        leftBtnText=<p><a href='https://www.tesla.com/shop?tesref=true'>Order Now</a></p>
        />

    </div>
  );
}

export default App;


//todo

//do the tailwind css for the menu sidebar
//do what the guy did for the logo
//fix height of all sections its too short
//check out react reveal for the text appeariing nice animation wowow so nice animation 
//add underscore on View Inventory
//make a whole new component for the accessories so that can get rid of the chevron and have only one button 





//thoughts 

//would be sick to figure out how to implement the gif tesla uses on their home page 
