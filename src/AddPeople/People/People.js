import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Peoples from './Peoples/Peoples'

const People = () => {
    const [peoples, setpeoples] = useState([])

    useEffect(() =>{
            fetch('https://radiant-fjord-01668.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setpeoples(data))
    }, [])
    return (
        <div>
            <h2>Our peoples: {peoples.length}</h2>
            <Container>
            <Grid container spacing={2}>
            {
                peoples.map(people => <Peoples
                    key={people._id}
                    people={people}
                    ></Peoples>)
            }
            </Grid>
            </Container>
           
        </div>
    )
}

export default People
