// Code your solution in this file!
const scuberLocation = 42;
//const destinationLocation;

function distanceFromHqInBlocks(destinationLocation) {
  return Math.abs(scuberLocation - destinationLocation)
};

function distanceFromHqInFeet(destinationLocation) {
  return distanceFromHqInBlocks(destinationLocation) * 264
}


function distanceTravelledInFeet(startingLocation, destinationLocation) {
  return (Math.abs(startingLocation - destinationLocation)) * 264
}

function calculatesFarePrice(feet) {
  if (feet < 400) {
    return 0
  } else if {
    return `cannot travle that far`
  }
};
