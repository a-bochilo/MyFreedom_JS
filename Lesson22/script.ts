"use strict";

// const header = document.querySelector("header");
// window.addEventListener("scroll", function (e) {
//   // const scrollFromTop = document.querySelector("html").scrollY;
//   header.style.background = scrollY > 0 ? "red" : "brown";
// });

const str: string = "String";
const isLoaded: boolean = true;
// const num: number = 42;
// const num: number = 4.2;
// const num: number = 4e2;

const numberArray: number[] = [1, 2, 3, "abc"]; // underline 'abc' because of wrong type

const Arr: Array<number> = [1, 2, 4];

const stringArray: string[] = ["name", "surname"];

const info: [string, number] = ["name", 123];

function sayMyName(name: string, year: number): void {
  // void means that function return nothing
  console.log(name, year);
}
sayMyName(12, 2000);

function sayMyName2(name: string, year: number): string {
  // string means that function return string data
  console.log(name);
  return `${name}, ${year}`;
}
sayMyName("name", "string");

function throwError(message: string): never {
  throw new Error(message);
}

type Login = string;
const login: Login = "admin";

type userId = string | null | undefined; // userId accepts types string or null or undefined
const id1: userId = "ID";
const id2: userId = null;
const id3: userId = undefined;

// interface controls obj structure and types of obj values
interface Rect {
  readonly id: string; //'readonly' means that value of id couldn't be changed
  color?: string; //'?' means that color property isn't obligatory
  size: {
    width: number;
    height: number;
  };
}

const rectObj: Rect = {
  id: "ID",
  // color: "red",
  size: {
    width: 45,
    height: 100,
  },
};

const rectObj2 = {} as Rect; // it means rectObj2 could be changed only according to Rect interface

interface RectWithArea extends Rect {
  // RectWithArea must have all Rect prop + f getArea which returns number data
  getArea: () => number;
}

const rectObj3: RectWithArea = {
  id: "123",
  size: {
    width: 12,
    height: 12,
  },
  getArea() {
    return this.size.width * this.size.height;
  },
};

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  width: "300px",
  borderBottom: "20rem",
};

enum Colors {
  Red,
  Green,
  Blue,
}
const color = Colors.Red; //0
const colorReverse = Colors[0]; // red

enum Cars {
  Kia = "KIA",
  AUDI = "AUDI",
  Renault = "Renault",
}

const audi = Cars.AUDI;

//
function sum(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

// Don't work example below
// interface MyPosition {
//   x: number | undefined;
//   y: number | undefined;
// }

// interface MyPositionDefault extends MyPosition {
//   default: string;
// }

// function pos(): MyPosition
// function pos(a: number): MyPositionDefault
// function pos(a: number, b: number) {
//   if(!a && !b) {
//     return (x: undefined, y: undefined)
//   }

//   if(a && !b) {
//     return {x: a, y: undefined, default: a.toString()}
//   }

//   return {x: a, y: b}
// }

// pos();
// pos(42);
// pos(42, 10);

//
const numberArray2: number[] = [1, 2, 3];
const numberArray3: string[] = ["1", "2", "3"];

function reverse<T>(arr: T[]): T[] {
  // func reverse has type T (generic-type) like 'any' type
  // whole code means that func return the same type which it has as an arg
  // this is difference between generic and any type, which could return any type
  return arr.reverse();
}
