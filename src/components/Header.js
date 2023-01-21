import React, {useState} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Header = (props) => {
    const [openMenu,setOpenMenu]=useState(0);
    const handleOpenMenu=()=> {
setOpenMenu(!openMenu);
}
    return ( 
     <div>
                 <div className="openMenu" onClick={handleOpenMenu}><FontAwesomeIcon icon={faBars} size="2x" inverse/></div>

        {openMenu?<header>
<div className="firstLineMenu"><div className='closeMenu'><FontAwesomeIcon onClick={handleOpenMenu} icon={faX} size="3x" inverse/></div></div>
{props.isLogged?
<div className='MenuElements'>
<div className='menuElement'><Link to="/orders" >Zamówienia</Link></div>
<div className='menuElement'><Link to="/calendar" >Kalendarz</Link></div>
<div className='menuElement'>Korespondencja</div>
</div>:
<div className='MenuElements'>
<div className='menuElement'> <Link to="/" >Zaloguj się</Link></div>
</div>}



            </header>:null}
            </div>
     );
}
 
export default Header;