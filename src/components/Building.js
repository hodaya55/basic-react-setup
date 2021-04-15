import React, { useState, Component } from 'react'
import Elevators from './Elevators'
import Floors from './Floors'
import { generateFloors, generateElevators } from '../Utils'

export default function Building() {

  const [elevators, setElevators] = useState(generateElevators());
  const [floors, setFloors] = useState(generateFloors());

  const handleCallingElevator = (floorIndex) => {
    console.log('test caliing from parent');
    // console.log(floorIndex);
    let _floors = floors.map((f, i) => {
      if (f.floorIndex === floorIndex) {
        f.isPending = true // maybe change to this name : isCallingElevator
      }
      return f;
    });

    setFloors(_floors);
    // checking here if an elevator avialable to come to this floorIndex
    // set requestedFloors var
    // animate smooth movement of elevator
  }

  const checkingAvailableElevator = () => {

  }

  return (
    <div>
      <Floors callingElevator={handleCallingElevator} floors={floors} elevators={elevators} />
    </div>
  )
}

