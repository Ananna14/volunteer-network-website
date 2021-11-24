import React, { useEffect, useState } from 'react'

const Volunteer = () => {
   const {user} = useAuth();
   const [appointments, setAppointments] = useState([]);

   useEffect(()=>{
       const url =``;
       fetch('')
   },[])
    return (
        <div>
           <h2>Volunteer Register list</h2>
        </div>
    )
}

export default Volunteer
