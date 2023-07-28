import React from 'react';
import {ReactComponent as MenuButton} from './../img/icon_menu.svg';
import Logo from './../img/logo.png';
import Nav from './Nav';
import {Link} from 'react-router-dom';

 const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const onNavButtonClick = (e) => {
        setShowMenu((curr) => !curr)
        e.stopPropagation();
    }

    return (
        <>
            <header>
                <div className='container flex' style={{height:'100%'}}>
                    <MenuButton className="nav-button" onClick={onNavButtonClick} />
                    <Link to="/" className="nav-link">
                        <img src={Logo} alt="Little Lemon Logo"/>
                    </Link>
                    <Nav className={showMenu ? "show" : ""} onClick={onNavButtonClick}/>
                </div>
            </header>
        </>

    )
}

export default Header;