import React, { useState } from 'react'
import Floors from './Floors'
import { generateFloors, generateElevators } from '../Utils'
import useSound from 'use-sound';
import elevatorDing from '../elevatording.mp3';

export default function Building() {

  const elevatorsDestinationQueue = [];
  const [playElevatorDing] = useSound(elevatorDing);
  const [elevators, setElevators] = useState(generateElevators());
  const [floors, setFloors] = useState(generateFloors());

  const floorBtnPressed = (fIndex) => {
    // console.log('floorIndex: ', fIndex);

    let _floors = floors.map((f, i) => {
      if (f.floorIndex === fIndex) {
        f.isPending = true;
      }
      return f;
    });
    setFloors(_floors);

    elevatorsDestinationQueue.push(fIndex);
    console.log('requested Floors', elevatorsDestinationQueue);

    // Checking here if an elevator avialable to come to this floorIndex and find the closet one
    findingClosetElevator(fIndex);
  }

  const findingClosetElevator = (floorIndex) => {
    // Identify the closet elevator to the floor, and send the elevator to that floor
    const avialableElevators = elevators.filter(e => !e.isMoving);
    console.log('avialableElevators', avialableElevators);
    if (avialableElevators.length) {
      const distances = avialableElevators.map((e, i) => {
        return { distance: Math.abs(floorIndex - e.currentFloorIndex), elevatorIndex: i }
      });
      const closetElevator = distances.reduce((prev, curr) => prev.distance < curr.distance ? prev : curr);
      const closetElevatorIndex = closetElevator.elevatorIndex;

      handleCallingElevator(floorIndex, closetElevatorIndex, closetElevator.distance);

      // Wait 2 seconds before moving to the next call (If exists)
      if (elevatorsDestinationQueue.length > 0) {
        setTimeout(() => {
        }, 2000);
      }

    } else {
      elevatorsDestinationQueue.push(floorIndex);
    }
  }

  const handleCallingElevator = (requestedFloorIndex, elevatorIndex, countFloors) => {
    console.log('handlecallingelevator');
    // delete the requested floor from the queqe (maybe not push at all in floorBtnPressed func?)
    elevatorsDestinationQueue.pop();

    // Measure the time it took the elevator to reach the designated floor
    // I'm assuming each floor takes 0.5 sec
    const timeout = countFloors * 500;
    setTimeout(() => {
      whenElevatorReachedFloor(requestedFloorIndex, elevatorIndex);
    }, timeout);

    let elevator = elevators[elevatorIndex];
    const direction = elevator.currentFloorIndex < requestedFloorIndex ? 'up' : 'down';
    elevator.direction = direction;
    elevator.isMoving = true;
    elevator.currentFloorIndex = requestedFloorIndex;

    let updatedElevators = elevators.map((e, i) => {
      if (i === elevatorIndex)
        return elevator;
      return e;
    });
    setElevators(updatedElevators);

    // The elevator should move toward the select floor in a smooth movement
  }

  const whenElevatorReachedFloor = (requestedFloorIndex, elevatorIndex) => {
    // Make a sound when the elevator reached the floor
    playElevatorDing();

    let elevator = elevators[elevatorIndex];
    elevator.direction = 'static';
    elevator.isMoving = false;
    elevator.currentFloorIndex = requestedFloorIndex;
    let updatedElevators = elevators.map((e, i) => {
      if (i === elevatorIndex)
        return elevator;
      return e;
    });
    setElevators(updatedElevators);


    // After the 2 seconds, change the elevator color back to black, and change the
    // button to “call”, with the initial design
    setTimeout(() => {
      elevator.isMoving = null;
      let updatedElevators = elevators.map((e, i) => {
        if (i === elevatorIndex)
          return elevator;
        return e;
      });
      setElevators(updatedElevators);

      let floor = floors[requestedFloorIndex];
      floor.isPending = false;
      let updatedFloors = floors.map((f, i) => {
        if (i === requestedFloorIndex)
          return floor;
        return f;
      });
      setFloors(updatedFloors);

    }, 2000);
  }

  return (
    <div>
      <Floors floorBtnPressed={floorBtnPressed} floors={floors} elevators={elevators} />
    </div>
  )
}

