class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
      console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
  }

// Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');

// Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// Have sonny greet jordan using the greet method.
sonny.greet(jordan);

// Have jordan greet sonny using the greet method.
jordan.greet(sonny);

// Write a statement to print the contact info (email and phone) of Sonny.
console.log(`Sonny's email: ${sonny.email}\nSonny's phone: ${sonny.phone}`);

// Write another statement to print the contact info of Jordan.
console.log(`Jordan's email: ${jordan.email}\nJordan's phone: ${jordan.phone}`);