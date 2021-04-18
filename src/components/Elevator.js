import React, { useState, useEffect } from 'react'
import { ReactComponent as ElevatorLogo } from "../icons8-elevator.svg"
import Animate from 'react-smooth'

export default function Elevator(props) {

  const color = props.isMoving !== null ? (props.isMoving ? 'red' : 'green') : 'black'

  const steps = [{
    style: {
      transform: ` ${props.direction === 'up' ? 'translateY(50px)' : props.direction === 'down' ? 'translateY(-50px)' : ''}`,
    },
    duration: 1500,
  }];

  return (
    <div>
      <Animate steps={steps}>
        <ElevatorLogo style={{ height: 50, fill: color }} />
      </Animate>
    </div>
  )
}
