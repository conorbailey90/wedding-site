import React, {useEffect, useRef, useState} from 'react'
import Link from 'next/link'

const Index = () => {
    const [sectionActive, setSectionActive] = useState(false);
    const [items, setItems] = useState([]);
    const coordinates = useRef({x: 0, y: 0});
    const lerpCoords = useRef({x: 0, y: 0});

    useEffect(()=>{
        setItems([...document.querySelectorAll('.hero-item')])
        setTimeout(()=>{
            setSectionActive(true);
        },200)
    }, [])

    useEffect(() => {
        document.addEventListener('mousemove', handleCursorMove)   
    }, [])

    useEffect(()=>{
        animate()
    })

    function lerp(start, end, t){
        
        return start * (1 - t) + end * t;
    }

    const handleCursorMove = e => {  
        coordinates.current = {x: e.clientX, y: e.clientY}
    };

    function animate(){

        lerpCoords.current = {x: parseFloat(lerp(lerpCoords.current.x, coordinates.current.x, 0.01)).toFixed(2), 
            y: parseFloat(lerp(lerpCoords.current.y, coordinates.current.y, 0.01)).toFixed(2)}
        
           
        items.forEach((item, idx) => {
            item.style.transform = `translate(${lerpCoords.current.x * ((idx+1 == 1 ? idx + 6 : idx + 1) * 0.01)}px, ${lerpCoords.current.y * ((idx+1 == 1 ? idx + 6 : idx + 1)  * 0.01)}px)`
        })
        requestAnimationFrame(animate)
    }

    

    const heroSectionStyles = {
        fontSize: "20px",
        color: '#161616',
        position: 'relative',
        width: '100%',
        height: '90vh',
        left: '0%',
        textAlign: 'center',
        letterSpacing: '1px',
    }

   

    return (
        <section style={heroSectionStyles} className={sectionActive ? "active" : ''}>
           <div className='hero-container'>
               <div className='hero-item'></div>
               <div className='hero-item'></div>
               <div className='hero-item'></div>
               <div className='hero-item'>
                   <h2>Le Marriage</h2>
                   <h3>Saturday, September 11, 2021</h3>
                   <h4>Biarritz, France</h4>
                   <Link href='/rsvp'>
                   <div className='cta'>
                       <h5>RSVP</h5>
                   </div>
                   </Link>
               </div>
               <div className='hero-item'></div>
           </div>
           
        </section>
    )
}

export default Index;