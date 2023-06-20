// Code your solution in this file!
const returnFirstTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(0, 2)

const returnLastTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(arrayOfDrivers.length - 2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(integer){
        return integer * integer
    }
}

const randomVariable = createFareMultiplier()

const fareDoubler = randomVariable => randomVariable * 2

const fareTripler = randomVariable => randomVariable * 3

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)
}