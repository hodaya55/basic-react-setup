import React, { useState, Component } from 'react'
import Elevators from './Elevators'
import Floors from './Floors'

export default class Building extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elevators: [],
      floors: []
    };
  }

  componentDidMount() {
    this.generateFloors();
  }

  generateFloors = () => {
    let floors = [
      { name: 'ground floor' },
      { name: '1st' },
      { name: '2nd' },
      { name: '3rd' },
      { name: '4th' },
      { name: '5th' },
      { name: '6th' },
      { name: '7th' },
      { name: '8th' },
      { name: '9th' }]
    let _floors = floors.map((floor, i) => {
      floor['floorIndex'] = i;
      floor['cols'] = [false, false, false, false, false]
      return floor;
    })

    this.setState({ floors: _floors.reverse() });
  }

  render() {
    return (
      <div>
        <Elevators />
        <Floors floors={this.state.floors} />
      </div>
    )
  }
}

