/*
var BaseEmployee=(function(){

    function BaseEmployee(){
        this.Address="noida"
    }
    return BaseEmployee;
})()


var Employee=(function(){

        function Employee(id,name,gender,salary){
           // console.log("I am constructor !")
            this.id=id;
            this.name=name;
            this.gender=gender;
            this.salary=salary;
           Employee.prototype.calculateSalary=function(commision){
                return this.salary/12+commision
            }
        }

        return Employee;

})()

Employee.prototype=new BaseEmployee();

var emp=new Employee(101,"monoj verma","male",130000);

console.log(emp.Address)
*/

function Increment(i){
    if(i>=1){
        console.log(i)
        i--
        return Increment(i)
    }
    else{
        return false;
    }
}

Increment(20)


//sum(2,3)  =>5
//sum(2)(3)=>5
//sum (2)(3)(4) =>9

















