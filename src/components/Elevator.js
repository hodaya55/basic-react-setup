import React from 'react'
import { ReactComponent as ElevatorLogo } from "../icons8-elevator.svg"

export default function Elevator(props) {

  const color = props.isMoving ? 'red' : 'black';
  // statusDirection - static , up, down

  return (
    <div>
      <ElevatorLogo style={{ height: 50, fill: color }} />
      {/* <ElevatorLogo style={{ height: 50 }} fill={props.color} /> */}
    </div>
  )
}
