#! /usr/bin/env node
class Student {
    static count = 0;
    id;
    name;
    courses;
    balance;
    constructor(name, courses) {
        this.id = ++Student.count;
        this.name = name;
        this.courses = courses;
        this.balance = 0;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getCourses() {
        return this.courses;
    }
    getBalance() {
        return this.balance;
    }
    enroll(course) {
        this.courses.push(course);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Thank you for your payment of $${amount}. Your new balance is $${this.balance}.`);
    }
    showStatus() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}
class StudentManager {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name, courses) {
        const student = new Student(name, courses);
        this.students.push(student);
        console.log(`Student ${name} with ID ${student.getId()} has been added.`);
    }
    enrollStudent(id, course) {
        const student = this.findStudentById(id);
        if (student) {
            student.enroll(course);
            console.log(`Student ${student.getName()} has been enrolled in ${course}.`);
        }
        else {
            console.log(`Student with ID ${id} not found.`);
        }
    }
    viewBalance(id) {
        const student = this.findStudentById(id);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log(`Student with ID ${id} not found.`);
        }
    }
    payTuition(id, amount) {
        const student = this.findStudentById(id);
        if (student) {
            student.payTuition(amount);
        }
        else {
            console.log(`Student with ID ${id} not found.`);
        }
    }
    showStatus(id) {
        const student = this.findStudentById(id);
        if (student) {
            student.showStatus();
        }
        else {
            console.log(`Student with ID ${id} not found.`);
        }
    }
    findStudentById(id) {
        return this.students.find((student) => student.getId() === id);
    }
}
// Example usage
const studentManager = new StudentManager();
studentManager.addStudent('Alice', ['Math', 'Science']);
studentManager.addStudent('Bob', ['History', 'English']);
studentManager.enrollStudent(1, 'Science');
studentManager.enrollStudent(2, 'Math');
studentManager.payTuition(1, 1000);
studentManager.payTuition(2, 500);
studentManager.viewBalance(1);
studentManager.viewBalance(2);
studentManager.showStatus(1);
studentManager.showStatus(2);
export {};
