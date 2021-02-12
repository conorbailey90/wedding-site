import React, {useEffect, useState} from 'react'


const Venue = () => {

    const [sectionActive, setSectionActive] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setSectionActive(true);
        },200)
    })

    const aboutContainerStyles = {
        position: 'relative',
        display: 'block',
        left: '10%',
        width: '80%',
        top: '1rem',
        height: '800px',
        fontSize: '1.2rem'      
    }

    return (

        <section className={sectionActive ? "venue-section active" : "venue-section"} >
            <div className='venue-image'>
            </div>
            <div style={aboutContainerStyles}>
                <h3>Venue | Espace de l'Ocean</h3>
                <p>Chambre d’Amour</p>
                <p>Esplanade des Docteurs Gentilhe</p>
                <p>64600 ANGLET</p><br></br>

                <h3>Travel Directions</h3>

                <p>✈ London Stansted To Biarritz | 1 hour 55 minutes</p>
                <p>+ Biarritz Airport to Anglet - 10 minutes drive.</p><br></br>
                <p>✈ London Stansted / Luton / Gatwick to Bordeaux | 1 hour 20 minutes</p>
                <p>+ Bordeaux Airport to Anglet - 2 hour drive or train.</p>
            </div>
        </section>
        
        
    )
}

export default Venue;