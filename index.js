// Code your solution in this file!
/*function distanceFromHqInBlocks(start){
    let dist;
    let diff;

    diff = start - 42;
    dist = Math.abs(diff);
    return dist;

}

function distanceFromHqInFeet(num){
    const stuff = distanceFromHqInBlocks(num);
    let feet;
    
    feet = stuff * 264;
    return feet;
}

function distanceTravelledInFeet(begin, end){
    let distance = (Math.abs(end - begin)) * 264;
    return distance;
}

function calculatesFarePrice(start, destination){
    let travel = (Math.abs(destination - start)) * 264;

    if (travel > 2500) {
        return 'cannot travel that far';
    }else if (travel < 2500 && travel > 2000){
        return 25;
    }else if (travel < 2000 && travel > 400) {
        return (travel - 400) * 0.02;
    }else if (travel < 400) {
        return 0;
    }
}*/

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return ((Math.abs(start - destination)) * 264)
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = (Math.abs(start - destination)) * 264;
    let fareRate = ((Math.abs(start - destination)) * 264) - 400;
    if (distance > 2500){
        return 'cannot travel that far'
    } else if (distance > 2000){
        return 25
    } else if (distance > 400){
        return fareRate * .02
    } else {
        return 0;
    }
  }