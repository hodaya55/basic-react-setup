import React from 'react'
import { ReactComponent as ElevatorLogo } from "../icons8-elevator.svg"

export default function Elevator(props) {
  return (
    <div>
      <ElevatorLogo style={{ height: 50, fill: props.color }} />
      {/* <ElevatorLogo style={{ height: 50 }} fill={props.color} /> */}
    </div>
  )
}
