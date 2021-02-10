const MobileHeader = (props) => {

    return (
        <div className='mobile-header'>
            <h1>Natacha & Conor</h1>
            <div onClick={()=> props.menuTog()} className='menu-tog'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

module.exports = MobileHeader;