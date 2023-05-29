 import React, { useState } from 'react'
 import CloseIcon from '@mui/icons-material/Close';
 import styled from 'styled-components'


function Header() {
    const [menuStatus, setMenuStatus] = useState(false)


  return (
    <>

    <div className='header'>
        <img  src='https://mixedrootsfoundation.org/wp-content/uploads/tesla-logo-new.png' id='logo-img'/>


    <div className ='menu'>
    <p><a href='https://tesla.com/models'>Model S</a></p>
    <p><a href='https://tesla.com/modely'>Model Y</a></p>
    <p><a href='https://tesla.com/modelx'>Model X</a></p>
    <p><a href='https://tesla.com/model3'>Model 3</a></p>
    <p><a href='https://tesla.com/solarroof'>Solar Roof</a></p>
    <p><a href='https://tesla.com/solarpanels'>Solar panels</a></p>
    <p><a href='https://tesla.com/powerwall'>Power Wall</a></p>
    </div>


    <div className ='services'>
    <p><a href='https://shop.tesla.com'>Shop</a></p>
    <p><a href='https://tesla.com/teslaaccount'>Account</a></p>
    <p onClick={() => setMenuStatus(true)}>Menu</p>
    </div>

    </div>

    <MenuSidebar className='menu-sidebar' show={menuStatus}>
            
    <div className='x-wrapper'  >
    <CloseIcon onClick={ () => setMenuStatus(false)} id='close-icon'/>
    </div>
    <li>Existing Inventory</li>
    <li>Used Inventory</li>
    <li>Trade-in</li>
    <li>Demo drive</li>
    <li>Fleet</li>
    <li>CyberTruck</li>
    <li>Roadster</li>
    <li>Semi</li>
    <li>Charging</li>
    <li>Commercial Energy</li>
    <li>Utilities</li>
    <li>Careers</li>
    <li>Find us</li>
    <li>Events</li>
    <li>Support</li>
    <li>Investor Relations</li>

    </MenuSidebar>

    </>
  )




}

export default Header 



const MenuSidebar = styled.div`

    display: ${props => props.show ? 'block' : 'none'};
    transition: display 0.2s ease-in-ease-out


`