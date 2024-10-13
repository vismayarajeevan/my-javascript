
class Employee{
    constructor(name,position, salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getSalary(){
        console.log("salary of "+this.name+" is "+this.salary );
        
    }
}