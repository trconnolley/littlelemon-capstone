import {Link} from 'react-router-dom';

 const Nav = (props) => {

    // const stopBubble = (e) => {
    //     e.stopPropagation();
    // }
    //TODO: edit stopPropogation after links/routes added
    return (
        <nav className={props.className} onClick={props.onClick}>
            <ul>
                <li onClick={props.onClick}><Link to="/" className="nav-link">Home</Link></li>
                <li onClick={props.onClick}><Link to="/about" className="nav-link">About</Link></li>
                <li onClick={props.onClick}><Link to="/menu" className="nav-link">Menu</Link></li>
                <li onClick={props.onClick}><Link to="/reservations" className="nav-link">Reservations</Link></li>
                <li onClick={props.onClick}><Link to="/orderonline" className="nav-link">Order Online</Link></li>
                <li onClick={props.onClick}><Link to="/login" className="nav-link">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;