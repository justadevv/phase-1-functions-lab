// Code your solution in this file!
function distanceFromHqInBlocks(a) {
    let hq = 42
    if (a > hq) {
        return a - hq
    } else if (a < hq) {
        return hq - a
    } else {
        return 'Please enter a starting block'
    }
}

distanceFromHqInBlocks(50)


function distanceFromHqInFeet(b) {
    return distanceFromHqInBlocks(b) * 264
}

distanceFromHqInFeet(41)


function distanceTravelledInFeet(a, b) {
    if (a > b) {
        return (a - b) * 264
    } else {
        return (b - a) * 264
    }
}

distanceTravelledInFeet(62, 60)

function calculatesFarePrice(a, b) {
    let distance = distanceTravelledInFeet(a, b)
    if (distance < 400) {
        return "It's free!"
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500) {
        return "It's twenty-five dollars."
    } else if (distance > 2500) {
        return "We cannot travel that far"
    }
}

console.log(calculatesFarePrice(34, 24))