import React, { useState, Component } from 'react'
import Elevators from './Elevators'
import Floors from './Floors'
import { generateFloors } from '../Utils'

export default function Building() {

  const [elevators, setElevators] = useState([]);
  const [floors, setFloors] = useState(generateFloors());

  const handleCallingElevator = (val) => {
    console.log('test caliing');
    console.log(val);
  }

  return (
    <div>
      <Elevators />
      <Floors callingElevator={handleCallingElevator} floors={floors} />
    </div>
  )
}

