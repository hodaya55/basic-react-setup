import React, { useState, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Elevator from './Elevator';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Floor(props) {
  const classes = useStyles();

  return (
    // <div className="flexFloor">
    //   <h6>{props.name}</h6>
    //   {props.cols.map((e, i) =>
    //     <div style={{ width: 100 + 'px' }} key={i}> {e ? 'elevator' : 'empty'} </div>
    //   )}
    //   <button onClick={props.callingElevator(props.floorIndex)}>{status}</button>
    // </div>
    <React.Fragment>
      <h6 style={{ width: 50 + 'px' }}>{props.name}</h6>
      {props.elevators.map((e, i) =>
        <Grid item xs={2} key={i}>
          <Paper className={classes.paper}>
            {e.currentFloorIndex === props.floorIndex ? <Elevator /> : 'empty'}
          </Paper>
        </Grid>
      )}
    </React.Fragment>
  )
}
