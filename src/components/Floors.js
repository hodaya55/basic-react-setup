import React, { useState, Component } from 'react'
import Floor from './Floor'
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';

export default function Floors(props) {
  const [status, setStatus] = useState('Call');

  // const handleCallingElevator = (val) => {
  //   console.log('test caliing');
  //   console.log(val);
  // }

  return (
    <div style={{ margin: 50 + 'px' }}>
      {props.floors.map((floor, index) => {
        // return (
        //   <Floor key={index} callingElevator={this.handleCallingElevator} {...floor}></Floor>
        // )
        return (
          <Grid key={index} container spacing={1}>
            <Grid container item >
              <Floor key={index} {...floor}></Floor>
              <button style={{ width: 100 + 'px', height: 50 + 'px' }} onClick={() => props.callingElevator(floor.floorIndex)}>{status}</button>
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}

