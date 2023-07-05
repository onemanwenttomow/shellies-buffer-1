// Could you explain one more time on inserting a function into another function?

// Write a function named waitThenRun that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.

// function sayHello(name) {
//   console.log("name: ", name);
//   console.log("Hello " + name);
// }

// sayHello("Pete");
// sayHello("Christina");
// sayHello("Natnael");

console.log("start");

// function waitThenRun(callback) {
//   console.log("callback: ", callback);
//   setTimeout(callback, 1500);
// }

// function sayGoodbye() {
//   console.log("goodbye");
// }

// // 1st call
// waitThenRun(function () {
//   console.log("Hello!");
// }); // logs 'Hello!' 1.5 seconds later

// // 2nd call
// waitThenRun(sayGoodbye);
// // 3rd call
// waitThenRun(() => console.log("!!!!!!!!!!!!!"));

// console.log("The names Bond");
// // setTimeout(() => {
// //   console.log("James Bond");
// // }, 3000);

function sayName() {
  console.log("James Bond");
}

// setTimeout(sayName, 1500);

//Could you please give us examples that help us instantly see the different between named function and anonymous function.

function callMe(cb) {
  console.log("about to call the callback", cb);
  cb();
}

callMe(() => console.log("ANON"));
callMe(sayName);
