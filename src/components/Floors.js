import React from 'react'
import Floor from './Floor'
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  floorElevatorBtn: {
    width: '100px',
    height: '50px',
    marginLeft: '15px',
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
    const reachedFloor = props.elevators.filter((e, i) => (e.currentFloorIndex === floor.floorIndex));
    console.log(floor);
    console.log(reachedFloor);
    // if (reachedFloor) { // TODO
    if (reachedFloor && !floor.isPending) {
      return <Button variant={floor.isPending ? 'danger' : 'success'} onClick={() => floorBtnPressed(floor.floorIndex)} className={classes.floorElevatorBtn}>{floor.isPending ? waitingLabel : callLabel}</Button>
    } else {
      return <Button variant="outline-success" className={classes.floorElevatorBtn}>{arrivedLabel}</Button>
    }
  }

  return (
    <div style={{ margin: 50 + 'px' }}>
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

