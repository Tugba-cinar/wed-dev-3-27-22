// var  sumOfNumbers= (num1, num2)=> {
//     return 'The sum is ' + (num1 + num2) 
// }
// console. log(sumOfNumbers(6,8))

// ;

// var  sumOfNumbers= function (num1, num2){
//     return 'The sum is ' + (num1 + num2) 
// }
// console. log(sumOfNumbers(6,8));

// //function declaration 

// function sumOfNumbers (num1, num2){
//    return 'The sum is ' +(num1+ num2) + '.';

// }
// console.log (sumOfNumbers (6,8));

// // function declaration

// function sumOfNumbers1(num1, num2) {
// 	var sum = num1 + num2;

// 	return 'The sum is ' + sum;
// }

// console.log(sumOfNumbers1(11, -9));

// // function expression

// var sumOfNumbers2 = function (num1, num2) {
// 	var sum = num1 + num2;

// 	return 'The sum is ' + sum;
// };

// console.log(sumOfNumbers2(11, -9));

// // arrow functions

// var sumOfNumbers3 = (num1, num2) => {
// 	var sum = num1 + num2;

// 	return 'The sum is ' + sum;
// };

// console.log(sumOfNumbers3(11, -9));


// arrow functions ex
// var myLuckyNumber = () => 11;
// console.log (myLuckyNumber());

// var isActive = ()=> true;
// console. log(isActive ());



//scope task

// var myInteger='25'


// var timesNine =()=> {
//     var functionNum = 9;
// return 'the result is '+ myInteger * functionNum;
// };

// console.log (timesNine());
// console.log ('The result is' + myInteger * functionNum);

// // function expression

//  var rectangleArea = function (height, width) {
//  	var sum = height * width;

// 	return 'The area is ' + sum;
//  };

// console.log(rectangleArea(10, 7));

// const someEvenNumbers =[2, 6, 10];
//  console. log( someEvenNumbers);
//  someEvenNumbers [0] ='Two'
//  someEvenNumbers[1] = 'six'
//  someEvenNumbers[2]='ten'

//  console. log ( someEvenNumbers); 

// const someOddNumbers =[1,5, 7];
//   console. log( someOddNumbers);
//  someOddNumbers [0] ='one'
//   someOddNumbers[1] = 'five'
//  someOddNumbers[2]='seven'

//   console. log ( someOddNumbers);



// array methods TASK


// const teamJuniors = ['John', 'Jane'];

// const teamSeniors = ['Mary', 'Robert'];

// console.log(teamJuniors);
// console.log(teamSeniors);

// teamJuniors.pop();
// teamSeniors.pop();

// console.log(teamJuniors);
// console.log(teamSeniors);

// teamJuniors.push('Amy');
// teamSeniors.push('Tim');

// console.log(teamJuniors);
// console.log(teamSeniors);

// const theTeam = teamJuniors.concat(teamSeniors);

// console.log(theTeam);
// console.log(teamJuniors);
// console.log(teamSeniors);

// console.log('The team consists of ' + theTeam.join(', '));


//ARRAYS AND fUNCTIONS TASK

// const watchedList = ['Friends', 'House','Lost'];

// const updateList= (show)=> {
//     watchedList.push(show);
//     return watchedList;
// };

// console.log(updateList ('The Best Years of Our Life'));
// console.log(updateList('Titanic'));


// const foodList = (newFood) => {
// 	const myCurrentFood = ['rice', 'salad', 'cake'];
// 	const myFood = myCurrentFood.concat(newFood);

// 	return myFood;
// };

// console.log(foodList(['soup', 'pasta']));

// // function declaration

// function sumOfNumbers1(num1, num2) {
// 	var sum = num1 + num2;

// 	return 'The sum is ' + sum;
// }

// console.log(sumOfNumbers1(11, -9));

// // function expression

// var sumOfNumbers2 = function (num1, num2) {
// 	var sum = num1 + num2;

// 	return 'The sum is ' + sum;
// };

// console.log(sumOfNumbers2(11, -9));

// // arrow functions

// var sumOfNumbers3 = (num1, num2) => {
// 	var sum = num1 + num2;

// 	return 'The sum is ' + sum;
// };

// console.log(sumOfNumbers3(11, -9));

// var hello = (name) => 'Hello ' + name;

// console.log(hello('Jane'));

// var newFunc = (num1, num2) => 'The sum is ' + (num1 + num2);

// console.log(newFunc(11, 8));

// var myLuckyNumber = () => 11;

// console.log(myLuckyNumber());

// var isActive = () => true;

// console.log(isActive());

// var newVariable = 'global'

// var userName = 'John Wayne';

// var returnUserName = () => {
// 	return userName;
// };

// console.log(returnUserName());

// console.log(userName);

// var logUserName = () => {
// 	var userName = 'John Wayne';

// 	return userName;
// };
// console.log(logUserName());

// var myInteger = 36;

// var timesNine = () => {
// 	var functionNum = 9;
// 	return 'The result is ' + myInteger * functionNum;
// };

// console.log(timesNine());
// console.log('The result is ' + myInteger * functionNum);

// var testVar = 1;

// console.log(testVar);

// var testVar = 2;

// console.log(testVar);

// let myName = 'John';

// console.log(myName);

// myName = 'Richard';

// console.log(myName);
// let backgroundColor;

// console.log(backgroundColor);

// backgroundColor = 'green';

// console.log(backgroundColor);

// let randomNumberGenerator = function () {
// 	return Math.random() * 10;
// };

// let timesEleven = (num) => num * 11;

// console.log(randomNumberGenerator());
// console.log(timesEleven(11));

// const myFirstArray = ['my', 'first', 'array', 11, true];

// const webDevTopics = ['HTML', 'CSS', 'JS'];

// console.log(myFirstArray);

// console.log(webDevTopics);

// console.log(myFirstArray[2]);
// console.log(myFirstArray[4]);
// console.log(
// 	'This is the first element of the array = ' + myFirstArray[0] + myFirstArray[1]
// );
// console.log(myFirstArray[11]);

// const someEvenNumbers = [2, 6, 10];

// console.log(someEvenNumbers);

// someEvenNumbers[0] = 'two';

// console.log(someEvenNumbers);

// someEvenNumbers[1] = 'six';

// console.log(someEvenNumbers);

// someEvenNumbers[2] = 'ten';

// console.log(someEvenNumbers);

// const someOddNumbers = ['one', 3, 5, 'seven'];

// console.log(someOddNumbers);

// someOddNumbers[3] = 7;

// console.log(someOddNumbers);

// someOddNumbers[1] = 'three';

// console.log(someOddNumbers);

// const salesforceData = ['org', 'app', 'object', 'field', 'record'];

// console.log('Array has ' + salesforceData.length + ' items');

// console.log(salesforceData);

// const numbers = [1, 2, 3, 4];

// console.log(numbers);

// numbers.push(5, 6, 7);
// numbers.push(8);

// console.log(numbers);

// numbers.pop();
// numbers.pop();

// numbers.pop();

// numbers.pop();

// numbers.pop();

// console.log(numbers);

// const food = ['apple', 'orange', 'tomato', 'bread'];

// console.log(food);

// console.log(food.join());
// console.log(food.join(''));
// console.log(food.join(' '));
// console.log(food.join(' _ '));

// const webDevCourses = ['CSS', 'JS', 'React'];

// console.log('SoftInnovas offers ' + webDevCourses.join(', '));

// console.log(food);

// console.log(webDevCourses);

// const somePositiveNumbers = [1, 2, 3];
// const someNegativeNumbers = [-1, -2, -3];

// const someIntegers = somePositiveNumbers.concat(someNegativeNumbers);

// console.log(someIntegers);
// console.log(somePositiveNumbers);
// console.log(someNegativeNumbers);

// const teamJuniors = ['John', 'Jane'];

// const teamSeniors = ['Mary', 'Robert'];

// console.log(teamJuniors);
// console.log(teamSeniors);

// teamJuniors.pop();
// teamSeniors.pop();

// console.log(teamJuniors);
// console.log(teamSeniors);

// teamJuniors.push('Amy');
// teamSeniors.push('Tim');

// console.log(teamJuniors);
// console.log(teamSeniors);

// const theTeam = teamJuniors.concat(teamSeniors);

// console.log(theTeam);
// console.log(teamJuniors);
// console.log(teamSeniors);

// console.log('The team consists of ' + theTeam.join(', '));

// const foodList = (newFood) => {
// 	const myCurrentFood = ['rice', 'salad', 'cake'];
// 	const myFood = myCurrentFood.concat(newFood);

// 	return myFood;
// };

// console.log(foodList(['soup', 'pasta']));

// console.log(1);
// console.log(2);
// console.log(3);

//  for (let i = 1; i < 6; i++) {
//  	console.log(3);
//  }

// for (let i = 1; i < 6; i++) {
// 	console.log(i);
// }

// for (i = 100; i > 50; i--) {
// 	console.log('Number = ' + i);
// }
//  for (var i = 0; i< 7; i++){
// 	 console.log("Tugba Cinar");
//  }
 for (let i = -5; i <5; i++) {
 	console.log('Number = ' + i);
 }