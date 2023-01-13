 const Nav = (props) => {

    const stopBubble = (e) => {
        e.stopPropagation();
    }
    //TODO: edit stopPropogation after links/routes added
    return (
        <nav className={props.className} onClick={props.onClick}>
            <ul>
                <li onClick={stopBubble}>Home</li>
                <li onClick={stopBubble}>About</li>
                <li onClick={stopBubble}>Menu</li>
                <li onClick={stopBubble}>Reservations</li>
                <li onClick={stopBubble}>Order Online</li>
                <li onClick={stopBubble}>Login</li>
            </ul>
        </nav>
    )
}

export default Nav;