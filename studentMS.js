// Student class representing a student entity
class Student {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
// StudentManagementSystem class for managing students
class StudentManagementSystem {
    students = [];
    // add a new student
    addStudent(student) {
        this.students.push(student);
    }
    //  get a student by ID
    getStudentById(id) {
        return this.students.find((student) => student.id === id);
    }
    //  get all students
    getAllStudents() {
        return this.students;
    }
    // remove a student by ID
    removeStudentById(id) {
        this.students = this.students.filter((student) => student.id !== id);
    }
}
// Example usage of the student management system
const studentSystem = new StudentManagementSystem();
// Adding students
studentSystem.addStudent(new Student(1, "Imran", 19));
studentSystem.addStudent(new Student(2, "Kamran", 19));
studentSystem.addStudent(new Student(3, "Areeba", 21));
studentSystem.addStudent(new Student(4, "Adnan", 18));
studentSystem.addStudent(new Student(5, "Sania", 18));
studentSystem.addStudent(new Student(6, "Bushra", 21));
// Retrieving and displaying all students
const allStudents = studentSystem.getAllStudents();
console.log("All Students:", allStudents);
// Retrieving and displaying a student by ID
const studentById = studentSystem.getStudentById(2);
console.log("Student with ID 2:", studentById);
// Removing a student by ID
studentSystem.removeStudentById(1);
console.log("All Students after removal:", studentSystem.getAllStudents());
export {};
