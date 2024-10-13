let employee ={
    name:"john",
    position:"Accountant",
    salary:50000,
    getSalary: function(){
        console.log("salary of "+this.name +" is "+ this.salary);
    }
}
console.log(employee.name);
console.log(employee.position);
console.log(employee.salary);
employee.getSalary();