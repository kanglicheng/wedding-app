import React from "react";
import { supabase } from "./Rsvp";

export const GuestList = () => {

    const [guests, setGuests] = React.useState([]);

    React.useEffect(()=>{

        const getGuests = async () => {
                let { data: Reservations, error } = await supabase
                .from('Reservations')
                .select('*')
            if(!error){
                setGuests(Reservations)
            }
            
        }
        getGuests();

    }, [])

    return (
        <table style={{margin: "12px"}}>
            <thead>
                <tr>
                    <th>
                        name
                    </th>
                    <th>
                        number of guests
                    </th>
                    <th>
                        attendance type
                    </th>
                    <th>
                        comments
                    </th>  
                </tr>
                
            </thead>
            <tbody>
                {guests.map((guest)=>(
                <tr key={guest.id}>
                    <td>
                        {`${guest.first_name} ${guest.last_name}`}
                    </td>
                    <td>
                        {guest.number_of_guests}
                    </td>
                    <td>
                        {guest.attendance_type}
                    </td>
                    <td>
                        {guest.comments}
                    </td>
                </tr>))}
            </tbody>
        </table>
    )

}