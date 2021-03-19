import react, { useState, useEffect } from 'react'
import RSVPModal from '../components/rsvpModal'
const axios = require('axios');

const RSVP = () => {

    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [guestNumber, setGuestNumber] = useState('');
    const [attending, setAttending] = useState('yes');
    const [mealOption, setMealOption] = useState('');
    const [specialReqs, setSpecialReqs] = useState('');
    const [modalActive, setModalActive] = useState(false);

    const [sectionActive, setSectionActive] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setSectionActive(true);
        },200)
    })

    const handleSubmit = event => {
        event.preventDefault();
        // alert('You have submitted the form.')
        let data = {
            name: guestName,
            email: guestEmail,
            phone: guestNumber,
            attending: attending,
            option: mealOption,
            requirements: specialReqs
        }

        fetch('/api/rsvp', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log(res)
            setModalActive(true)
            // res.status === 200 ? this.setState({ submitted: true }) : ''
          })
      }

      function closeModal(){
          setModalActive(false);
          setGuestName('');
          setGuestEmail('');
          setGuestNumber('');
          setSpecialReqs('');
          setAttending('');
      }

    let submitStyles = {
        width: '150px',
        border: '1px solid #161616',
        cursor: 'pointer'
    }

    let modalClass = modalActive ? 'modal active' : 'modal';
    return (
        <section className={sectionActive ? "active" : ""}>
        <RSVPModal closeModal={closeModal} className={modalClass} name={guestName} />
        <div className='rsvp-div'>
            
            <form className='rsvp-form' onSubmit={handleSubmit}>
             <h1>RSVP</h1>
                <input 
                    type='text' 
                    value={guestName}
                    id="name" 
                    placeholder="Full name - Nom complet" 
                    onChange={e => setGuestName(e.target.value)}
                    required 
                /><br />
                <input 
                    type="email" 
                    value={guestEmail}
                    id="email" 
                    placeholder="Email address - Adresse email"
                    onChange={e => setGuestEmail(e.target.value)}
                    required
                /><br />
                <input 
                    type='text' 
                    id="mobile" 
                    value={guestNumber}
                    placeholder="Phone number - Numéro de téléphone"
                    onChange={e => setGuestNumber(e.target.value)}
                    required
                /><br />
                <label>Attending?</label>
                <select id="attending "
                    onChange={e => setAttending(e.target.value)}>
                    <option value="yes">Yes i'll be there! - Oui, je serais là !</option>
                    <option value="no">Sorry I can't make it - Non, désolé </option>
               
                </select><br />
                <label>Meal option - Préférence repas</label><br />
                <select id="meal-preference "
                    onChange={e => setMealOption(e.target.value)}>
                    <option value="">Please select - Sélectionnez s'il vous plaît</option>
                    <option value="meat">Meat - Viande</option>
                    <option value="fish">Fish - Pesco-Végétarien</option>
                    <option value="vegetarian">Vegetarian - Végétarien</option>
                    <option value="vegan">Vegan - Végan</option>
                    <option value="other">Other - Autre (specify / Spécifiez) </option>
                </select><br />
                <label>Special requirements</label><br />
                <input 
                    type='text' 
                    id="special-reqs" 
                    value={specialReqs}
                    placeholder="Specify - Spécifiez "
                    onChange={e => setSpecialReqs(e.target.value)}
                /><br />
            
                <input style={submitStyles} type="submit" value="Submit"></input>
            </form>
            
            </div>
       
        </section>
    )
}


export default RSVP;