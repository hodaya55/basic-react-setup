import React, { Component } from 'react'
import Floor from './Floor'
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';

export default class Floors extends Component {


  handleCallingElevator = (val) => {
    console.log('test caliing');
    console.log(val);
  }

  render() {
    return (
      <div style={{ margin: 50 + 'px' }}>
        {this.props.floors.map((floor, index) => {
          // return (
          //   <Floor key={index} callingElevator={this.handleCallingElevator} {...floor}></Floor>
          // )
          return (
            <Grid key={index} container spacing={1}>
              <Grid container item >
                <Floor key={index} callingElevator={() => this.handleCallingElevator} {...floor}></Floor>
              </Grid>
            </Grid>
          )
        })}
      </div>
    )
  }
}

