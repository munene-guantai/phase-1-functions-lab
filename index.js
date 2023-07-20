// Code your solution in this file!
// distanceFromHqInBlocks()
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42); 
  }
  
  // distanceFromHqInFeet()
  function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264; 
    return distanceFromHqInBlocks(blocks) * blockInFeet;
  }
  
  // distanceTravelledInFeet()
  function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264; 
    return Math.abs(start - destination) * blockInFeet;
  }
  
  // calculatesFarePrice(start, destination)
  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
    
    // gives customers a free sample
  if (feetTravelled <= 400) {
    return 0;
  }

  // charges 2 cents per foot when total feet travelled is between 400 and 2000
  if (feetTravelled > 400 && feetTravelled <= 2000) {
    return (feetTravelled - 400) * 0.02;
  }

  // charges 25 dollars for a distance over 2000 feet
  if (feetTravelled > 2000 && feetTravelled <= 2500) {
    return 25;
  }

  // does not allow rides over 2500 feet
  if (feetTravelled > 2500) {
    return 'cannot travel that far';
  }
}