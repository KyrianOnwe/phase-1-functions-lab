// Code your solution in this file!
function distanceFromHqInBlocks(start){
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
}