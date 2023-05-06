#! /usr/bin/env node
class Student {
    private static count = 0;
    private readonly id: number;
    private readonly name: string;
    private readonly courses: string[];
    private balance: number;
  
    constructor(name: string, courses: string[]) {
      this.id = ++Student.count;
      this.name = name;
      this.courses = courses;
      this.balance = 0;
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getCourses(): string[] {
      return this.courses;
    }
  
    public getBalance(): number {
      return this.balance;
    }
  
    public enroll(course: string): void {
      this.courses.push(course);
    }
  
    public viewBalance(): void {
      console.log(`Balance for ${this.name}: $${this.balance}`);
    }
  
    public payTuition(amount: number): void {
      this.balance -= amount;
      console.log(`Thank you for your payment of $${amount}. Your new balance is $${this.balance}.`);
    }
  
    public showStatus(): void {
      console.log(`ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Courses enrolled: ${this.courses.join(', ')}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  class StudentManager {
    private students: Student[];
  
    constructor() {
      this.students = [];
    }
  
    public addStudent(name: string, courses: string[]): void {
      const student = new Student(name, courses);
      this.students.push(student);
      console.log(`Student ${name} with ID ${student.getId()} has been added.`);
    }
  
    public enrollStudent(id: number, course: string): void {
      const student = this.findStudentById(id);
      if (student) {
        student.enroll(course);
        console.log(`Student ${student.getName()} has been enrolled in ${course}.`);
      } else {
        console.log(`Student with ID ${id} not found.`);
      }
    }
  
    public viewBalance(id: number): void {
      const student = this.findStudentById(id);
      if (student) {
        student.viewBalance();
      } else {
        console.log(`Student with ID ${id} not found.`);
      }
    }
  
    public payTuition(id: number, amount: number): void {
      const student = this.findStudentById(id);
      if (student) {
        student.payTuition(amount);
      } else {
        console.log(`Student with ID ${id} not found.`);
      }
    }
  
    public showStatus(id: number): void {
      const student = this.findStudentById(id);
      if (student) {
        student.showStatus();
      } else {
        console.log(`Student with ID ${id} not found.`);
      }
    }
  
    private findStudentById(id: number): Student | undefined {
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
  