import Link from 'next/link'

const Navbar = () => {

    const navStyles = {
        position: "fixed",
        width: "100%",
        height: "10vh",
        background: "#FFFFFF",
        zIndex: 2,
        overflow: 'hidden',
        color: "#161616",
        borderBottom: '1px solid rgba(0,0,0,0.2)'
        
    }

    const navHeaderStyles ={
        position: 'absolute',
        bottom: '1rem',
        fontSize: '30px',
        width: '100%',
        textAlign: 'left',
        left: '10%'
    }
    const linkStyles = {
        display: "flex",
        position: 'absolute',
        bottom: '1rem',
        listStyle: "none",
        width: "450px",  
        right: '10%',
        justifyContent: 'space-between',
        fontSize: '15px' ,

    }

    return (
        <nav className="menu" style={navStyles}>
            <h1 style={navHeaderStyles} className="nav-header">Natacha & Conor</h1>
            <ul className="nav-links" style={linkStyles}>
                <li>
                   
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                  
                </li>
                <li>
                    <Link href="/venue">
                        <a>Venue</a>
                    </Link>
                </li>
                <li>
                    <Link href="/accomodations">
                        <a>Accomodations</a>
                    </Link>
                </li>
            
                <li>
                    <Link href="/rsvp">
                        <a>RSVP</a>
                    </Link>
                </li>
            </ul>
        </nav>
       
    )

}

export default Navbar;