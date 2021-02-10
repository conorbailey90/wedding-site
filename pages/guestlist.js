import {useState, useEffect} from 'react'


const GuestList = () =>{

    const [guests, setGuests] = useState([]);

    useEffect(() => {
        fetch("/api/rsvp")
          .then(res => res.json())
          .then((response) => {
              console.log(response.data)
              setGuests(response.data)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              console.log(error)
            }
          )
      }, [])

      const guestListStyle = {
          position: "relative",
          top: '120px'
      }

    return(
        <section style={guestListStyle} className="guest-list">
            

            <table>
           
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Meal choice</th>
                    </tr>
                {guests.map(guest => (
                    <tr key={guest._id}>
                        <td>{guest.name}</td>
                        <td>{guest.email}</td>
                        <td>{guest.phone}</td>
                        <td>{guest.option}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}

export default GuestList;