import React from 'react'
import './Event.scss'

const Event = ({ eventImage }) => {
  return (
    <div className='eventContainer'>
      <img className='eventImage' src={eventImage} alt='event' />
    </div>
  )
}

export default Event