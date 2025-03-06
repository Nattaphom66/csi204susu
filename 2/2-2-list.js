// List / Array → เพิ่ม, ลบ, แก้ไขข้อมูลในลิสต์
let students = ["A", "B", "C"];
students.push("D");  // เพิ่ม "David"
students.splice(students.indexOf("Bob"), 1); // ลบ "Bob"
students[1] = "E"; // แก้ไข "Charlie" เป็น "Eve"
console.log("Array:", students);

// Dictionary / Object → เก็บค่าข้อมูลนักเรียน
let studentInfo = {
    name: "Tom",
    age: 20,
    grade: "A"
};
console.log("Object:", studentInfo);

// Tuple → JavaScript ไม่มี Tuple โดยตรง แต่ใช้ Array แบบ const ได้
const subjects = ["Math", "Science", "English"];
console.log4("Tuple (Array):", subjects);

// Set → ใช้ Set เพื่อกำจัดค่าที่ซ้ำกัน
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = new Set(numbers);
console.log("Set:", uniqueNumbers);
