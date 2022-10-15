class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.score = [];
  }
  addScore(score) {
    this.score.push(score);
    return this.score;
  }
  calculateAverage() {
    let sum = this.score.reduce((a, b) => a + b, 0);
    return sum / this.score.length;
  }
  static EnrollingStudent() {
    return "Enrolling student";
  }
}

let daniel = new Student("daniel", "hemmati");
daniel.score.push(100);
daniel.score.push(100);
console.log(daniel.calculateAverage());
console.log(Student.EnrollingStudent());
