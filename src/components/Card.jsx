import React from 'react'
import './Card.css'


const Card = ({data}) => {
  return (
    
    <div className='card'>
        <h3>{data.name}</h3>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt="beer-detail" />
    </div>
    
  )
}

export default Card