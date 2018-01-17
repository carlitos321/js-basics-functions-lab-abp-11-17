// Code your solution in this file!
const scuberLocation = 42;
//const destinationLocation;

function distanceFromHqInBlocks(destinationLocation) {
  return Math.abs(scuberLocation - destinationLocation)
};

function distanceFromHqInFeet(destinationLocation) {
  return distanceFromHqInBlocks(destinationLocation) * 264
}


var verticalDistance = function distanceTravelledInFeet(startingLocation, destinationLocation) {
  return (Math.abs(startingLocation - destinationLocation)) * 264
}

function calculatesFarePrice(startingLocation, destinationLocation) {
  if (distanceTravelledInFeet(startingLocation, destinationLocation) < 400) {
    return 0
  } else if (distanceTravelledInFeet(startingLocation, destinationLocation) >= 400 && <2000 ) {
    return
  } else if (distanceTravelledInFeet(startingLocation, destinationLocation) > 2500) {
    return `cannot travel that far`
  } else if (distanceTravelledInFeet(startingLocation, destinationLocation) > 2500) {
    return `cannot travel that far`
  }
};
