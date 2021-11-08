import React, { useEffect, useState } from 'react'
import SingleHome from './SingleHome';
import './Home.css'

const Home = () => {
    const [homes, setHomes] = useState([]);

    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setHomes(data))
    },[])
    return (
           <div className="half-width">
                {/* <h2>I Grow By Helping People In Need</h2> */}
           {
                homes.map(home=><SingleHome home={home}></SingleHome>)
            }
           </div>
    )
}

export default Home
