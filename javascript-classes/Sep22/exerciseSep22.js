/*
Employee
Data Modeling
*/



// class Person {
//     id: "3872983"
//     firstName: "Julia";
//     lastName:"Santos";
//     age:"39";
// }

// console.log(`${id}, ${firstName}`)


// this.


// class Employee {

// }

////////////////-------------/////////////
/*

wrong -my way




class Person {
  constructor(name) { //// constructor(firstName, lastName, age)
    
    // this.id = 123//unique ID
    this.firstName = name;
    this.lastName = last;
    this.age = numAge;
  }

  speak() { 
    console.log(`${this.name} `);
  }
}

// 



class Person extends Employe { //// class Employee extend Person 
  company() {
    console.log(`${this.name} teste`);
  }
  sugar(){
    console.log(`${this.name} be part of the testing`)
  }
}

// 

const people = new Person("Julia");
const position = new Employe ("Software Engineer");


people.company();
position.company(); 
*/

//______________________________________________________________//

//professor explica //


class Person {
  constructor(firstName, lastName, age) { //// constructor(firstName, lastName, age)
    
     this.id = 123//unique ID
    this.firstName = name;
    this.lastName = last;
    this.age = numAge;
  }

  speak() { 
    console.log(`${this.name} `);
  }
}



class  Employee extends  Person { //// class Employee extend Person 
  constructor (firstName, lastName, age) {
    super(firstName, lastName);
    this.position = new Position (position);
    this.salary = this.salary;
  }

//   sugar(){
//     console.log(`${this.name} be part of the testing`)
//   }
}

// 

const people = new Person("Julia");
const position = new Employe ("Software Engineer");


people.company();
position.company(); 








/////////////////////------------------------///////
/*
// Base class: Employee

class Employee {
  constructor(position) {
    this.position = position; // Store job position
  }

  // Base method for company
  company() {
    console.log(`${this.position} at the company`);
  }
}

// Derived class: Person extends Employee
class Person extends Employee {
  constructor(firstName, lastName, age, position) {
    super(position); // Call parent constructor to set position
    this.firstName = firstName; // Store first name
    this.lastName = lastName;   // Store last name
    this.age = age;             // Store age
  }

  // Method to display full name
  speak() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  // Override company method
  company() {
    console.log(`${this.firstName} is a ${this.position}`);
  }

  // Additional method
  sugar() {
    console.log(`${this.firstName} is part of the testing`);
  }
}

// Example usage
const people = new Person("Julia", "Smith", 30, "Software Engineer");
const position = new Employee("Manager");

people.speak(); // Output: Julia Smith
people.company(); // Output: Julia is a Software Engineer
people.sugar(); // Output: Julia is part of the testing
position.company(); // Output: Manager at the company


AI explain to me 
*/
