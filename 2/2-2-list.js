let students = ["A", "B", "C"];
students.push("D");
students.splice(students.indexOf("Bob"), 1);
students[1] = "E";
console.log("Array:", students);


let studentInfo = {
    name: "Tom",
    age: 20,
    grade: "A"
};
console.log("Object:", studentInfo);


const subjects = ["Math", "Science", "English"];
console.log("Tuple (Array):", subjects);


let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(numbers);
console.log("Set:", uniqueNumbers);
