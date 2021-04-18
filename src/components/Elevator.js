import React from 'react'
import { ReactComponent as ElevatorLogo } from "../icons8-elevator.svg"

export default function Elevator(props) {

  const color = props.isMoving !== null ? (props.isMoving ? 'red' : 'green') : 'black';
  // const animation = props.direction === 'up' ? 'slide-up' : props.direction === 'down' ? 'slide-bottom' : '';
  // direction - static , up, down

  return (
    <div>
      {/* <ElevatorLogo style={{ height: 50, fill: color }} className={animation} /> */}
      <ElevatorLogo style={{ height: 50, fill: color }} />
    </div>
  )
}
