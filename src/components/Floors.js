import React, { useState, Component } from 'react'
import Floor from './Floor'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';

export default function Floors(props) {
  const callLabel = 'Call';
  const waitingLabel = 'Waiting';

  const callingElevator = (val) => {
    props.callingElevator(val)
    console.log('test caliing child');
    console.log(val);
  }

  return (
    <div style={{ margin: 50 + 'px' }}>
      {props.floors.map((floor, index) => {
        return (
          <Grid key={index} container spacing={1}>
            <Grid container item >
              <Floor key={index} {...floor} elevators={props.elevators}></Floor>
              <Button onClick={() => callingElevator(floor.floorIndex)} style={{ width: 100 + 'px', height: 50 + 'px', backgroundColor: floor.isPending ? 'red' : '#9ae143' }} variant="contained" >
                {floor.isPending ? waitingLabel : callLabel}
              </Button>
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}

