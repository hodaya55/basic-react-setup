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
  },
  floorName: {
    width: 105 + 'px', paddingRight: '5px', fontWeight: 'bold', textAlign: 'right', margin: 'auto'
  }
}));

export default function Floor(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <h6 className={classes.floorName}>{props.name}</h6>
      {props.elevators.map((e, i) =>
        <div className={classes.box} key={i}>
          {e.currentFloorIndex === props.floorIndex ? <Elevator {...e} /> : ''}
        </div>
      )}
    </React.Fragment>
  )
}
