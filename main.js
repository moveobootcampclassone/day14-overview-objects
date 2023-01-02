"use strict";

//Arrow functions
// const myFunc = () => {
//   console.log("hello");
//   console.log("hello2");
//   return 5;
// };

// To call the function:
// myFunc();

// const myFunc2 = (num = 1, str = "Hi") => {
//   console.log("hello");
//   console.log("hello2");
//   return 5;
// };

// myFunc(5, "Hola");

//Ex7
const school = {
  name: "pola",
  location: "jerusalem",
  students: [
    {
      name: "guy",
      age: 20,
      grade: 4,
      classes: ["math", "geograpy", "biolagy"],
    },
    {
      name: "roy",
      age: 14,
      grade: 6,
      classes: ["gym", "pysics", "biolagy"],
    },
    {
      name: "dan",
      age: 32,
      grade: 7,
      classes: ["math", "geograpy", "bible"],
    },
  ],
  teachers: [
    {
      name: "robert",
      age: 40,
      classes: ["math", "analistics"],
    },
    {
      name: "jon",
      age: 40,
      grade: 5,
      classes: ["math", "gym", "bible"],
    },
    {
      name: "tomer",
      age: 40,
      grade: 5,
      classes: ["geograpy", "biolagy"],
    },
  ],
};

function checkTheSchool(studentName, teacherName) {
  let studentClasses = school.students.find(
    (student) => student.name === studentName
  ).classes;
  let teacherClasses = school.teachers.find(
    (teacher) => teacher.name === teacherName
  ).classes;
  // now: studentClasses = ["gym", "pysics", "biolagy"]
  // now: teacherClasess = ["math", "analistics"]
  for (let i = 0; i < studentClasses.length; i++) {
    for (let j = 0; j < teacherClasses.length; j++) {
      if (studentClasses[i] === teacherClasses[j]) {
        //     isMatchClass = true;
        //     break;
        return true;
      }
    }
  }
  //   return isMatchClass;
  return false;

  // option 2:
  //   let isMatchClass = false;
  //   for (let i = 0; i < studentClasses.length; i++) {
  //   for (let j = 0; j < teacherClasses.length; j++) {
  //     if (studentClasses[i] === teacherClasses[j]) {
  //            isMatchClass = true;
  //            break;
  //     }
  //   }
  // }
  // //   return isMatchClass;
  // return false;
}

// console.log(checkTheSchool("roy", "robert")); //returns false
// console.log(checkTheSchool("roy", "jon")); //returns true

//Ex8
const library = {
  name: "Springfield Public Library",
  location: "Springfield",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Novel",
      publisher: "Charles Scribner's Sons",
      pages: 180,
      isbn: "978-0-7432-6555-2",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Novel",
      publisher: "J.B. Lippincott & Co.",
      pages: 281,
      isbn: "978-0-044-93349-2",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      genre: "NoVEl",
      publisher: "Little, Brown and Company",
      pages: 214,
      isbn: "978-0-316-76953-3",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Horor",
      publisher: "T. Egerton",
      pages: 279,
      isbn: "978-0-141-19031-4",
    },
  ],
};
function titlesOfTheGenre(myGenre) {
  let result = [];
  for (let i = 0; i < library.books.length; i++) {
    if (myGenre.toLowerCase() === library.books[i].genre.toLowerCase()) {
      result.push(library.books[i].title);
    }
  }
  return result;
}
console.log(titlesOfTheGenre("Novel"));
// console.log(titlesOfTheGenre("Horor"));
