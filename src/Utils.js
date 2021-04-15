// const someCommonValues = ['common', 'values'];

export const generateFloors = () => {
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
    floor['isPending'] = false;
    return floor;
  })

  return _floors.reverse();
};

export const generateElevators = () => {
  const elevators = [
    { currentFloorIndex: 0, isMoving: false, statusDirection: 'static' },
    { currentFloorIndex: 0, isMoving: false, statusDirection: 'static' },
    { currentFloorIndex: 0, isMoving: false, statusDirection: 'static' },
    { currentFloorIndex: 0, isMoving: false, statusDirection: 'static' },
    { currentFloorIndex: 0, isMoving: false, statusDirection: 'static' },
  ]

  return elevators;
};
