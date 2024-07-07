// Code your solution here
function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(driverObjects, query) {
  return driverObjects.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}


const drivers = ["mohamed", "ahmed", "David", "Aisha"];
console.log(findMatching(drivers, "juma")); 
console.log(fuzzyMatch(drivers, "ahmed")); 

const driverObjects = [
  { name: "haji", hometown: "New York" },
  { name: "juma", hometown: "Los Angeles" },
  { name: "David", hometown: "Chicago" }
];
console.log(matchName(driverObjects, "juma")); 
