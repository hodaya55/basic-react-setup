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

    // Checking here if an elevator avialable to come to this floorIndex and find the closet one
    findingClosetElevator(fIndex);
  }

  const findingClosetElevator = (floorIndex) => {
    // Identify the closet elevator to the floor, and send the elevator to that floor
    const avialableElevators = elevators.filter(e => !e.isMoving);
    // console.log('avialable Elevators', avialableElevators);
    if (avialableElevators.length) {
      const distances = avialableElevators.map((e, i) => {
        return { distance: Math.abs(floorIndex - e.currentFloorIndex), elevatorIndex: i }
      });
      const closetElevator = distances.reduce((prev, curr) => prev.distance < curr.distance ? prev : curr);

      handleCallingElevator(floorIndex, closetElevator.elevatorIndex, closetElevator.distance);

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
    // delete the requested floor from the queqe (maybe not push at all in floorBtnPressed func and only in findingClosetElevator func?)
    elevatorsDestinationQueue.pop();

    let elevator = elevators[elevatorIndex];
    // Measure the time it took the elevator to reach the designated floor
    // I'm assuming each floor takes 0.5 sec.
    const time = countFloors * 500; // TODO need to handle the time when all the elevators are occupied ?
    // Present the time it took the elevator to reach the floor
    elevator.timeToReachFloor = time / 1000 + " Sec.";
    elevator.destinationFloor = requestedFloorIndex;
    elevator.isMoving = true;

    let updatedElevators = elevators.map((e, i) => {
      if (i === elevatorIndex)
        return elevator;
      return e;
    });
    setElevators(updatedElevators);

    // Waiting this time ...
    setTimeout(() => {
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

      whenElevatorReachedFloor(requestedFloorIndex, elevatorIndex);
    }, time);



  }

  const whenElevatorReachedFloor = (requestedFloorIndex, elevatorIndex) => {
    // Make a sound when the elevator reached the floor
    playElevatorDing();

    let elevator = elevators[elevatorIndex];
    elevator.direction = 'static';
    elevator.isMoving = false;
    elevator.timeToReachFloor = '';
    elevator.destinationFloor = null;

    let updatedElevators = elevators.map((e, i) => {
      if (i === elevatorIndex)
        return elevator;
      return e;
    });
    setElevators(updatedElevators);

    let floor = floors.find(f => f.floorIndex === requestedFloorIndex);
    floor.isPending = false; // Change the button text to “arrived”
    let updatedFloors = floors.map((f, i) => {
      if (f.floorIndex === requestedFloorIndex)
        return floor;
      return f;
    });
    setFloors(updatedFloors);

    // After the 2 seconds, change the elevator color back to black,
    // and change the button to “call”, with the initial design
    setTimeout(() => {
      elevator.isMoving = null;
      let updatedElevators = elevators.map((e, i) => {
        if (i === elevatorIndex)
          return elevator;
        return e;
      });
      setElevators(updatedElevators);

      floor.isPending = null;
      let updatedFloors = floors.map((f, i) => {
        if (f.floorIndex === requestedFloorIndex)
          return floor;
        return f;
      });
      setFloors(updatedFloors);
      // console.table(updatedFloors);

    }, 2000);
  }

  return (
    <div className="center">
      <Floors floorBtnPressed={floorBtnPressed} floors={floors} elevators={elevators} />
    </div>
  )
}

