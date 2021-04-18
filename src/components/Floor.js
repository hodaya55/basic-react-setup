import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Elevator from './Elevator';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
    textAlign: 'center',
    border: '1px solid gray',
    padding: '5px',
    width: '150px',
    height: '60px',
  }
}));

export default function Floor(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <h6 style={{ width: 100 + 'px', margin: 'auto 0' }}>{props.name}</h6>
      {props.elevators.map((e, i) =>
        <div className={classes.box} key={i}>
          {e.currentFloorIndex === props.floorIndex ? <Elevator {...e} /> : ''}
        </div>
      )}
    </React.Fragment>
  )
}
