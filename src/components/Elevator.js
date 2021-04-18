import React, { useState, useEffect } from 'react'
import { ReactComponent as ElevatorLogo } from "../icons8-elevator.svg"
import Animate from 'react-smooth'

export default function Elevator(props) {

  const color = props.isMoving !== null ? (props.isMoving ? 'red' : 'green') : 'black';
  // const animation = props.direction === 'up' ? 'slide-up' : props.direction === 'down' ? 'slide-bottom' : '';
  // direction - static, up, down
  // const [step, setStep] = useState(0);
  // useEffect(() => void setInterval(() => { setStep(step + 50) }, 100), [])

  const steps = [{
    style: {
      transform: ` ${props.direction === 'up' ? 'translateY(20px)' : props.direction === 'down' ? 'translateY(-50px)' : ''}`,
    },
    duration: 1500,
  }];

  return (
    <div>
      <Animate steps={steps}>
        {/* <ElevatorLogo style={{ height: 50, fill: color, transform: `translateY(${step + "px"})` }} /> */}
        <ElevatorLogo style={{ height: 50, fill: color }} />
      </Animate>
    </div>
  )
}
