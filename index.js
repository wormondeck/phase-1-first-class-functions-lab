const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  

const returnLastTwoDrivers = function(array) {
  return array.slice(array.length - 2, array.length);
}

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers]);

function createFareMultiplier(fareMultiplier) {

    return function doubleMultiplier(fare){
        return (fare * fareMultiplier);
    }

}
function fareDoubler(fare) {
    return fare * 2;
  }

function fareTripler(fare) {
    return fare * 3;
  }

function selectDifferentDrivers(arrayOfDrivers, callBack) {
    if (returnFirstTwoDrivers === callBack) {
      return arrayOfDrivers.slice(0, 2);
    } else if (returnLastTwoDrivers === callBack) {
      return arrayOfDrivers.slice(-2);
    
    }} 
    