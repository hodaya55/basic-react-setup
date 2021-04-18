import React from 'react'
import Floor from './Floor'
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  floorElevatorBtn: {
    width: '100px',
    height: '40px',
    margin: 'auto 5px',
  }
}));

export default function Floors(props) {
  const classes = useStyles();
  const callLabel = 'Call';
  const waitingLabel = 'Waiting';
  const arrivedLabel = 'Arrived';

  const floorBtnPressed = (floorIndexPressed) => {
    props.floorBtnPressed(floorIndexPressed);
  }

  const displayBtn = (floor) => {
    if (floor.isPending === null) {
      return <Button variant='success' onClick={() => floorBtnPressed(floor.floorIndex)} className={classes.floorElevatorBtn}>{callLabel}</Button>
    } else if (floor.isPending) {
      return <Button variant='danger' onClick={() => floorBtnPressed(floor.floorIndex)} className={classes.floorElevatorBtn}>{waitingLabel}</Button>
    } else { //     false
      return <Button variant="outline-success" className={classes.floorElevatorBtn}>{arrivedLabel}</Button>
    }
  }

  return (
    <div style={{ margin: '50px' }}>
      {props.floors.map((floor, index) => {
        return (
          <Grid key={index} container >
            <Grid container item >
              <Floor key={index} {...floor} elevators={props.elevators}></Floor>
              {displayBtn(floor)}
            </Grid>
          </Grid>
        )
      })}
    </div>
  )
}

