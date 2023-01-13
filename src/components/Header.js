import React from 'react';
import {ReactComponent as MenuButton} from './../img/icon_menu.svg';
import Logo from './../img/logo.png';
import Nav from './Nav';

 const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const onNavButtonClick = () => {
        setShowMenu((curr) => !curr)
    }

    return (
        <>
            <header>
                <div className='container flex' style={{height:'100%'}}>
                    <MenuButton className="nav-button" onClick={onNavButtonClick} />
                    <img src={Logo} alt="Little Lemon Logo"/>
                    <Nav className={showMenu ? "show" : ""} onClick={onNavButtonClick}/>
                </div>
            </header>
        </>

    )
}

export default Header;