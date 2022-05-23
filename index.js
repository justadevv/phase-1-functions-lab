// Code your solution in this file!
function distanceFromHqInBlocks(a) {
    let hq = 50
    if (a > hq) {
        return a - hq
    } else {
        return hq - a
    }
}
console.log(distanceFromHqInBlocks(52))


function distanceFromHqInFeet(a) {
    return distanceFromHqInBlocks(a) * 264
}
console.log(distanceFromHqInFeet(52))


function distanceTraveledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264
    } else {
        return (destination - start) * 264
    }
}
console.log(distanceTraveledInFeet(45, 50))


function calculatesFarePrice(start, destination) {
    let distance = distanceTraveledInFeet(start, destination)

    if (distance <= 400) {
        return 'free'
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400)
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'Cannot travel that far'
    }
}

console.log(calculatesFarePrice(30, 50))
