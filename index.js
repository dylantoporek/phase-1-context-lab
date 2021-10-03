/* Your Code Here */

function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    
}

function createEmployeeRecords(array){
    return array.map(function(e){
        return createEmployeeRecord(e);
    })
}

function createTimeInEvent(obj){
    let [date, hour] = obj.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    })
    return this
}

function createTimeOutEvent(obj){
    let [date, hour] = obj.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    })
    return this
}

function hoursWorkedOnDate(obj){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === obj
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === obj
    })
    return ((outEvent.hour - inEvent.hour)/100) 
}

function wagesEarnedOnDate(obj){
    return hoursWorkedOnDate.call(this, obj) * this.payPerHour
}

function calculatePayroll(array){
  let wages = []
    array.forEach(employee =>{
        wages.push(allWagesFor.call(employee))
    })
    return wages.reduce(function(a, b){
        //console.log(a + b)
        return a + b
    })   
}

function findEmployeeByFirstName(array, name){
    return array.find(employee => employee.firstName === name)
        
}
    

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

