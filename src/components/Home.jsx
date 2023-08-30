import React, { useEffect, useState } from 'react'
import Card from './card'
import { Link } from 'react-router-dom'


const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async()=>{
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
  }

  useEffect(()=>{
    getBeers()
  },[])

  return (
    <div className='grid'>
        {beers.length 
          ? beers.map(item=> (<Link to={"/beer/" + item.id} key={item.id} ><Card data={item}/></Link>))
          : null
        }
    </div>
  )
}

export default Home

