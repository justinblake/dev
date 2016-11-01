




var employees = [];

function Employee(fName, jTitle, salary, empStatus) {
    this.fName = fName;
    this.jTitle = jTitle;
    this.salary = salary;
    this.empStatus = empStatus || 'Full Time';
    this.printEmployeeForm = function () {
        return(this.fName + " " + this.jTitle + " " + this.salary + " " + this.empStatus);
    };
}


var tim = new Employee("tim", "ceo", "a lot");


console.log(tim.printEmployeeForm());

var tom = new Employee("tom", "ceo", "400,000", "Part Time");
console.log(tom.printEmployeeForm());

var bill = new Employee("bill", "ceo", "12,000");
console.log(bill.printEmployeeForm());



function addEmployees(empNum, fName, jTitle, salary, empStatus) {

    var empNum = new Employee(fName, jTitle, salary, empStatus);

    employees.push(empNum);

}

addEmployees("num1", "tim", "ceo", "a lot");

addEmployees("num2", "tom", "ceo", "400,000", "Part Time");

addEmployees("num3", "bill", "ceo", "12,000");


console.log(employees)
