import React, {useEffect, useState} from 'react'

const Accomodations = () => {

    const [sectionActive, setSectionActive] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setSectionActive(true);
        },200)
    },[])

    const accomodationImageStyles = {
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '80%'    
    }

    return (
        <section className={sectionActive ? "accomodations active" : "accomodations"}>
            
                <h3 style={{position: 'relative', left: '10%', marginBottom: '1rem'}}>Accomodations</h3>

                <div className='accomodation'>
                    <div>
                        <a target="_blank" href="https://all.accor.com/hotel/2050/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps"><h3>Le Regina Biarritz Hotel & SPA</h3></a>
                        <p>52 Avenue de l'Imperatrice</p>
                        <p>64200 Biarritz France</p>
                    </div>
                    <div style={{position: 'relative', width: '100%', height: '100%'}}>
                        <div style={{...accomodationImageStyles, backgroundImage: "url(/images/regina.jpg)"}}></div>  
                    </div> 
                </div>
                <div className='accomodation'>
                    <div>
                        <a target="_blank" href="https://www.hotel-maisondulierre-biarritz.com/en/">
                            <h3>La Maison du Lierre</h3>
                        </a>
                        <p>3 Avenue du Jardin Public</p>
                        <p>64200 Biarritz</p>
                    </div>
                    <div style={{position: 'relative', width: '100%'}}>
                        <div style={{...accomodationImageStyles, backgroundImage: "url(/images/maisonlierre.jpg)"}}></div>  
                    </div>  
                </div>
                <div className='accomodation'>
                    <div>
                        <a target="_blank" href="https://www.belambra.com/club-anglet-la-chambre-d-amour/summer">
                            <h3>Belambra Club - La Chambre d'Amour</h3>
                        </a>
                       
                        <p>2 Promenade des Sources</p>
                        <p>64600 Anglet</p>
                    </div>
                    <div style={{position: 'relative', width: '100%'}}>
                        <div style={{...accomodationImageStyles, backgroundImage: "url(/images/belambra.jpg)"}}></div>  
                    </div>  
                </div>
               
               
        </section>
    )
}

export default Accomodations;