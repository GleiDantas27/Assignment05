/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
function setEmployees(employees) {
    "use strict";
    localStorage.setItem("employees", JSON.stringify(employees));
}
function getEmployees() {
    "use strict";
    var employees = JSON.parse(localStorage.getItem("employees"));

    if (employees === null) {
        employees = [{
            name : "Joe Adams",
            title : "Cleaning",
            extension : 2546
        }, {
            name : "Yolanda Dgh",
            title : "secretary",
            extension : 4567
        }, {
            name : "John King",
            title : "Sales",
            extension : 9890
        }, {
            name : "Joshua Lewis",
            title : "Vp Sales",
            extension : 3467
        }, {
            name : "Craig Mh",
            title : "President",
            extension : 3785
        }];
        setEmployees(employees);
    }
    return employees;
}
function addEmployee(employees, employee) {
    "use strict";
    employees.push(employee);
    setEmployees(employees);
}
function deleteEmployee(employees, employee) {
    "use strict";
    var e;
    for (e in employees) {
        if (employees.hasOwnProperty(e)) {
            if (employees[e].name === employee.name && employees[e].title === employee.title && employees[e].extension === employee.extension) {
                employees.splice(e, 1);
                setEmployees(employees);
                return true;
            }
        }
    }
    return false;
}