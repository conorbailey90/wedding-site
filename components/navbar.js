import Link from 'next/link'

const Navbar = (props) => {


    return (
        <nav className={props.menuActive ? 'menu active' : 'menu'}>
            <h1 className="nav-header">Natacha & Conor</h1>
            <ul className="nav-links">
                <li>
                   
                    <Link href="/">
                        <a onClick={()=> props.menuTog()}>Home</a>
                    </Link>
                  
                </li>
                <li>
                    <Link href="/venue">
                        <a onClick={()=> props.menuTog()}>Venue</a>
                    </Link>
                </li>
                <li>
                    <Link href="/accomodations">
                        <a onClick={()=> props.menuTog()}>Accomodations</a>
                    </Link>
                </li>
            
                <li>
                    <Link href="/rsvp">
                        <a onClick={()=> props.menuTog()}>RSVP</a>
                    </Link>
                </li>
            </ul>
        </nav>
       
    )

}

export default Navbar;