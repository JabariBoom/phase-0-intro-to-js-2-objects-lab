// Write your solution in this file!
const employee = {}
employee.name = "Brian"
employee.streetAddress = "Runda Court"

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const anotherNewEmployee = {...employee};
    delete anotherNewEmployee[key];
    return anotherNewEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}