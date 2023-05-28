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
    <p href='a'>Model S</p>
    <p href='a'>Model Y</p>
    <p href='a'>Model X</p>
    <p href='a'>Model 3</p>
    <p href='a'>Solar Roof</p>
    <p href='a'>Solar panels</p>
    <p href='a'>Power Wall</p>
    </div>


    <div className ='services'>
    <p href='a'>Shop</p>
    <p href='a'>Account</p>
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

    display: ${props => props.show ? 'block' : 'none'}


`