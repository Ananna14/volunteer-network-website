import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../../../../UseFirebase/Context/hooks/UseAuth';

const Volunteer = () => {
   const {user} = useAuth();
   const [volunteer, setVolunteer] = useState([]);

   useEffect(()=>{
       const url =`http://localhost:5000/appointments?email=${user.email}`
       fetch('url')
       .then(res => res.json())
       .then(data => setVolunteer(data))
   },[])
    return (
        <div>
           <h2>Volunteer Register list: {volunteer.length}</h2>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Registating</TableCell>
            <TableCell align="right">Date</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {volunteer.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Volunteer
