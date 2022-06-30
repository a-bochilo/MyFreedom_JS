"use strict";

// Test 1
class Developer {
  constructor(name, devLang) {
    this.name = name;
    this.devLang = devLang;
  }
  showMessage() {
    console.log(`${this.name} works with ${this.devLang}`);
  }
}

class Student extends Developer {
  constructor(name, devLang, groupNumber) {
    super(name, devLang);
    this.groupNumber = groupNumber;
  }
}

let developer = new Developer("Ivan", "JS");
developer.showMessage();

let student = new Student("Oleg", "JS", "1603");
student.showMessage();

// Test 2
String.prototype.addDot = function () {
  return this + ".";
};
console.log("Some string".addDot());
