 /*  Part 1 - Employee Management System:

        Let’s consider a real-world scenario where we have a list of employees in an organization and we want 
        to perform various tasks using JavaScript:

            Create an Employee Object:
                Define an object template for an employee containing attributes like name, age, department, and salary.
                Each employee should be represented as an object with these attributes.
            Calculate Average Salary:
                Write a function that takes an array of employee objects as input and calculates the average
                salary of all employees.
            Find Employees in a Department:
                Write a function that takes an array of employee objects and a department name as input.
                Return an array containing all employees who belong to the specified department.
            Increase Salary for Employees:
            Write a function that takes an array of employee objects and a percentage increase as input.
                Increase the salary of each employee in the array by the specified percentage.
            Sort Employees by Age:
                Write a function that takes an array of employee objects and sorts them based on their age in ascending order.
                Return the sorted array of employee object
*/


let Employee = [
    {
        name: "John",
        age: 30,
        department: "Sales", 
        salary: 50000
    },
    {
        name: "Alice",
        age: 25,
        department: "Marketing", 
        salary: 60000
    },
    {
        name: "Bob",
        age: 35,
        department: "IT", 
        salary: 70000
    },
    {
        name: "Charlie",
        age: 28,
        department: "HR", 
        salary: 45000
    },
    {
        name: "David",
        age: 40,
        department: "Finance", 
        salary: 80000
    },
    {
        name: "Eva",
        age: 32,
        department: "Sales", 
        salary: 55000
    },
    {
        name: "Frank",
        age: 29,
        department: "Marketing", 
        salary: 65000
    },
    {
        name: "George",
        age: 38,
        department: "IT", 
        salary: 75000
    },
    {
        name: "Hannah",
        age: 26,
        department: "HR", 
        salary: 40000
    }
]


function averageSalary(employees) {
    let sum = 0;
    employees.forEach((employee) => {
      sum += employee.salary;
    });
    return sum / employees.length;
  }
  
  console.log("Average Salary:", averageSalary(Employee));
  console.log("");
  console.log("");


  function department(employees){
     return  employees.map((e)=>{
       console.log(`The employee ${e.name} is belongs to ${e.department} department`)
    })

  }

department(Employee)
console.log("");
console.log("");


function percentage(employees){
    return  employees.map((e)=>{
      let salary = e.salary
      let random = Math.ceil(Math.random() * 20)
      let percentage = ((salary * random) / 100) + salary
      console.log(`The employee ${e.name} has ${random}% raise in salary and is salary is now ${percentage}`)
   })

 }


 percentage(Employee)
 console.log("");
 console.log("");


 function ageFilter(employees){
    let Age = employees.sort((a, b) => a.age - b.age)
    return  Age.map((e)=>{
        console.log(`The employee ${e.name} has ${e.age} age`)
   })
 }


 ageFilter(Employee)


