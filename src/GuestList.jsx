import React from "react";
import { supabase } from "./Rsvp";

export const GuestList = () => {

    const [guests, setGuests] = React.useState([]);
    const [guestCount, setGuestCount] = React.useState(0)

    React.useEffect(()=>{

        const getGuests = async () => {
                let { data: Reservations, error } = await supabase
                .from('Reservations')
                .select('*')
            if(!error){
                setGuests(Reservations)
            }
            
        }

        const getCount = async () => {
            const { data, error } = await supabase.rpc('get_guest_count')
            if(!error){
               setGuestCount(data);
            }

        }
        setGuestCount(1)
        getGuests();
        getCount()

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
                <tr>
                    <td>Current Total: {guestCount}</td>
                </tr>
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