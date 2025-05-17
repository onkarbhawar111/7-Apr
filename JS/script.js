// console.log('Hello World.....');

// console.log("Value of a: ", 5+5)



// var x 
// let x = 101;
// const z = 102;


// console.log("Value of x: ", x)



// var x = 100;   //declaration , assignment


// // var x = 200;    //redeclaration
// x = 300     //reassignment

// console.log(x)

// let x = 200;

// let x = 100;
// // x = 300;

// console.log(x)


// const x = 1000;

// // const x = 2000;
// x = 3000;

// console.log(x)



// alert('Welcome')

// const age = prompt('Enter your age: ')
// console.log(age)


// let employee = {
//     fname: "Onkar",
//     lname: "Bhawar",
//     profile: "Full Stack Dev",
//     empId: 101
// }
// console.log(employee)

// const keys1 = Object.keys(employee)
// console.log(keys1)


// const arr = [11, 'Onkar']

// console.log(arr)

// function greet(){
//     console.log('greet called')

// }

// greet()




// let x = 100;  //global scope

// function greet(){
//     console.log('greet called')


//     let y = 200
//     console.log(x);
//     console.log(y);
// }


// {
//     let y = 111;
//     console.log(y)
// }


// console.log(y)
// greet()



// var x = 111

// function greet(){
//     var x = 100;

//     console.log('inside fn: ', x)
// }


// // console.log(x)
// greet()



// let x = [11, 22];
// console.log(typeof(x))


// let x = 20
// let y = 3   ///3

// console.log(x % y)  //2*2*2  %



// let x = 100;

// // console.log(++x)   //pre-increment
// console.log(x++)   //post-increment
// console.log(x)


// let y = 100;
// // console.log(--y)
// console.log(y--)
// console.log(y)


// let x = 2
// let y = 5
// console.log(x)
// x **= y         // x = x+y
// console.log(x)




// let x = 500
// let y = 5000   //  '5'

// console.log(x < y)


// let x = 2;
// let y = ''

//ternary operator / conditional opr
// part1 ? part2 : part3

// condition ? true : false;

// x == y  ? console.log('EQUAL') : console.log('NOT EQUAL')




//logical opr

//logical AND        &&

// let x = 100
// let y = 200
// console.log((x < y) && (y==200) )
// console.log((x < y) && (x==10) )
// console.log((x > y) && (x==100) )
// console.log((x > y) && (x==100) )

//logical OR  ||

// let x = 100;
// let y = 200;

// console.log((x < y) || (x==100) )
// console.log((x < y) || (x==10) )
// console.log((x > y) || (x==100) )
// console.log((x > y) || (x==10) )

//logical NOT   !

// let x = 8;
// console.log(!x)      

// let fname = '     Onkar   ';
// let lname = "Bhawar"
// let fullName = `My name is ${fname} ${lname}. I am a Full Stack Dev`

// console.log(fname.length)
// console.log(fullName.toLowerCase())
// console.log(fname.toUpperCase())
// console.log(fname.charAt(2))
// console.log(fullName.indexOf('nam'))
// console.log(fname.slice(0,3))
// console.log(lname.replace('Bh1','ZZ'))

// let result = fullName.split('.')
// console.log(result)
// console.log(fname.trim())
// console.log(fullName.includes('AAAAA'))




// let arr = [11, 22, 33, 44, 55]
// let arr2 = [999, 888]
// console.log(arr.length)
// arr.push(66)
// console.log(arr)

// console.log(arr.pop())
// console.log(arr.shift())
// console.log(arr)

// console.log(arr.unshift(99))
// console.log(arr.concat(arr2))
// console.log(arr.slice(2, 5))
// console.log(arr.splice(0, 2, 'Onkar'))
// console.log(arr)



//function declaration
// function greet(){
//     console.log('fn called...')
// }

// greet();

//arrow fn
// const greet = () =>{
//     console.log('fn called...!')
// }

// greet()


// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99]
// let newArr = arr.forEach((a) => {
//     return console.log(a+1)
// })


// let newArr = arr.map((a) => {
//     return a+1    
// })
// console.log(newArr)

// let newArr = arr.filter((key)=>{
//     return key%2==1
// })

// console.log(newArr)

// let arr = ['Apple', 'Banana', 'Pineapple', 'Chickoo']

// let res = arr.find((key) =>{
//    return key.startsWith('A')
// } )
// console.log(res)

// let arr = [1, 2, 3, 4]
// let res = arr.reduce((accumulator, i)=>{
//     return accumulator + i;
// }, 0)

//1st iteration      acc=0, i=1  acc=acc+i=0+1=1
//2nd iteration      acc=1, i=2  acc=acc+i=1+2=3
//3rd iteration      acc=3, i=3  acc=acc+i=3+3=6
//4th iteration      acc=6, i=4  acc=acc+i=6+4=10

// console.log(res)

// console.log(arr.includes(1))
// console.log(arr.reverse())
// console.log(arr)

// console.log('Start')

// for(let i=0; i<3 ; i++){
//     console.log(i)
// }

// console.log('End')


// let i=0
// while(i<3){
//     console.log(i)

//     i++;
// }



// let i=1110

// do{
// console.log(i)
// i++;
// }while(i<3)

// let person = {
//     fname: "Onkar",
//     lname:'Bhawar',
//     age:25
// }

// console.log(person)

// for(let key in person){
//     console.log(person[key])
// }

// let arr = [11, 22, 33, 44, 55]
// for(let key of arr){
//     console.log(key)
// }


// let age = 2

// if(age > 18){
//     console.log("You are allowed to vote.")
// } else{
//     console.log('Not Allowed...')
// }

// console.log('Start')
// let x = 1

// if(x==1){
//     console.log('x ========= 1')
// } else if(x == 2){
//     console.log('x ========= 2')    
// } else if(x == 3){
//     console.log('x ========= 3')
// } else{
//     console.log('none matched...')
// }

// console.log('End')


// for(let i=0 ; i<5 ; i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i)
// }

// console.log('End')


// let day = 'Monday'

// switch (day) {
//     case 'Sunday':
//         console.log('Its Sunday.')
//         break;
//     case 'Monday1':
//         console.log('Its Monday.');
//         break;
//     default:
//         console.log('No day matched.')
//         break;
// }

// console.log('End')

//fn declaration
// function greet(){
//     console.log('Good Morning...')
// }

// function add(a, b){     //a, b - parameters a=10, b=5





//    console.log(a+b)



// }

// add(10, 5)   //10, 5 - arguements

//fn expression
// const greet = function(){
//     console.log('Good Morning !!!')
// }
// greet()

// let greet = () => {
//     console.log('Good Morning ...!!!')    
// }
// greet()

// let x = 10
// let y = 5
// const add = (a, b) => a+b

// console.log(add(x, y))
// let fname = "Onkar"
// const greet = x => { console.log("Good Morning", x) }  

// greet(fname)



// try {
//     let x = 100
//     console.log(x / 20)

//     console.log('Hello')
// } catch (error) {
//     console.log('THe Error is: ', error)
// } finally{
//     console.log('finally exeuted....')
// }




// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//         throw new Error('Parameter is not a number!!!!');
//     }
//     return console.log("Area: ", height * width)
// }
// try {
//     getRectArea('three', 5);
// } catch (e) {
//     console.log(e);
// } 


// const person = {
//     fname: "Onkar",
//     lname: "Bhawar",
//     age: 27,
//     fullName: function(){
//         return `My name is ${this.fname} ${this.lname}`
//     }
// }

// console.log(person.fullName())

// let element = document.getElementById('d11')

// console.log(element.textContent)

// let ele = document.getElementsByClassName('cls1')

// console.log(ele[2].textContent)

// let x = document.getElementsByTagName('h2')
// console.log(x[3].textContent)

// const y = document.querySelector('#d11')
// console.log(y.textContent)

// let ele = document.querySelectorAll('.cls1, h2')

// console.log(ele[3].textContent)

// let ele = document.getElementsByName('n1')

// console.log(ele[0].value)

// let x = document.getElementById('d12')
// console.log(x.innerHTML)

// x.textContent = "Hello World !"


// let element = document.querySelector('img')

// element.setAttribute('src', '1https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_640.jpg')
// element.setAttribute('alt', 'New Img Desc')

// console.log(element.getAttribute('src'))

// let ele = document.querySelector('h1')

// console.log(ele.style.color)

// ele.style.backgroundColor = 'yellow'


//background-color  --->   backgroundColor

// let ele = document.querySelector('div')

// let newEle = document.createElement('p')
// newEle.textContent = "World !"

// ele.append(newEle)
// ele.prepend(newEle)
// ele.after(newEle)
// ele.before(newEle)

// ele.remove()

// let ele = document.querySelectorAll('button')

// ele[0].onclick = () => {
//     console.log('btn 1 clicked !')
// }

// ele[1].ondblclick = () =>{
//     console.log('btn 2 clicked !')
// }

// let div = document.querySelector('div')

// div.onmouseover = () =>{
//     console.log('you are on div')
// }

// let ele = document.getElementsByTagName('h2')

// ele[0].onmouseover = (event) =>{
//         console.log(event)
// }

// let btn = document.querySelector('button')

// const evt = function(){
//     alert('Btn 1 was clicked !!!')
// }

// const f2 = function(){
//     console.log('hovered.....')
// }
// btn.addEventListener('click', evt)

// btn.addEventListener('mouseover', f2)

// btn.removeEventListener('click', evt)
// btn.removeEventListener('mouseover', f2)







// class Person {
//     constructor() {
//         console.log('ctor1 called....')

//     }
//     // constructor(fname, lname){   //fname = "Onkar"   lname = 'Bhawar'
//     //     console.log('ctor2 called....')
//     //     this.fname = fname;    //obj.fname = "Onkar"
//     //     this.lname = lname;

//     // }

//     greet() {
//         console.log('greet called ....')
//     }

//     greet1() {
//         console.log('greet1 called')
//     }
// }

// const obj = new Person('Onkar', "Bhawar")
// console.log(obj.lname)
// obj.greet()





// class Animal{
//     makesSound(){
//         console.log('animal makes sound')
//     }
// }

// class Dog extends Animal {
//     bark(){
//         console.log('Dog barks...')
//     }
//     // makesSound(){
//     //     console.log('Dog makes sound')
//     // }

// }

// const goldy = new Dog()
// // goldy.bark()

// goldy.makesSound()




// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// class Employee extends Person {
//     constructor(name, age, job) {
//         super(name, age);  // Calls the parent class's constructor
//         this.job = job;
//     }
//     work() {
//         console.log(`${this.name} is working as a ${this.job}.`);
//     }
// }

// const employee1 = new Employee('Bob', 30, 'Developer');
// employee1.greet();  
// employee1.work();    

// class Animal {
//   speak() {
//     console.log('Animal speaks');
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak();  // Calls the parent class's speak method
//     console.log('Dog barks');
//   }
// }

// const dog = new Dog();
// dog.speak();

//ENCAPSULATION

// class Person {
//     constructor(name, age) {
//         this.name = name; // Public property  person1.name = Alice
//         let _age = age; // Private variable (not accessible outside)

//         //getter method
//         this.getAge = function () {
//             return _age;
//         };

//         //setter method
//         this.setAge = function (newAge) {
//             if (newAge > 0) _age = newAge;
//             else console.log("Invalid age");
//         };
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// const person1 = new Person("Alice", 20);
// console.log(person1.name); 
// console.log(person1.getAge()); // 25

// person1.setAge(30);
// console.log(person1.getAge()); // 30

// person1.setAge(-5); // Invalid age





//ABSTRACTION

// class Car {
//   constructor(model) {
//     this.model = model;
//   }

//   start() {
//     console.log("Car is starting...");
//     this._fuelInjection(); // Private method
//   }

//   _fuelInjection() {
//     console.log("Fuel injection process...");
//   }
// }

// const car1 = new Car("TATA");
// car1.start();  

// car1._fuelInjection()





//INHERITANCE

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // Call parent constructor
//     this.breed = breed;
//   }

//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// const dog1 = new Dog("Buddy", "Golden Retriever");
// dog1.speak(); // Output: Buddy barks



//POLYMORPHISM

// class Animal {
//   speak() {
//     console.log("This animal makes a sound");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("Meow Meow!");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Woof Woof!");
//   }
// }

// const animals = [new Animal(), new Cat(), new Dog()];

// animals.forEach((animal) => animal.speak());



//SYNC PROG
// console.log('Start');

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log('End');


// //ASYNC PROG
// console.log('Start');

// setTimeout(() => {
//   console.log('Asynchronous task'); 
// }, 2000);

// console.log('End');





//CALLBACKS

//SYNCHRONOUS CALLBACK
// function greet(name, callback) {
//     console.log('Hello, ' + name);
//     callback(); // Synchronous callback
// }

// function afterGreet() {
//     console.log('Greeting completed.');
// }

// greet('Onkar', afterGreet);

//ASYNCHRONOUS CALLBACK

// function fetchData(callback) {   //callback = processData
//   setTimeout(() => {
//     console.log('Data fetched from server');
//     callback(); // Asynchronous callback
//   }, 2000);                                               // Simulates 2 seconds delay
// }

// function processData() {
//   console.log('Processing fetched data...');
// }

// console.log('Start');
// fetchData(processData);                                      // Asynchronous
// console.log('End');



//HOF

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// function processUserInput(callback) {
//   const userName = "John";
//   return callback(userName); // Passing greet as the callback
// }

// console.log(processUserInput(greet)); // Output: Hello, John!







// function multiplier(factor) {
//     return function (num) {
//         return num * factor;
//     };
// }

// // const double = multiplier(2); // Returns a function that doubles a number
// const triple = multiplier(3); // Returns a function that triples a number

// // console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15



//HOISTING 

// greet()

// function greet(){
//     console.log('Good Morning')
// }


// const greet = () =>{
//         console.log('Good Morning')

// }


// console.log(x)

// var x = 100


//ARRAY DESTRUCTURING

// const arr = [11, 22, 33]

// const [a, b, c] = arr;


// console.log(a)

//REST opr


// function sum(...numbers){
//    const x =  numbers.reduce((total, num)=> total + num, 5)
//     console.log(x)
// }

// sum(1, 2, 3, 4)



//SPREAD OPR
// const arr1 = [1, 2]
// const arr2 = [3, 4]
// const arr3 = [...arr1, ...arr2]

// console.log(arr3)





//CALLBACK HELL
// setTimeout(() => {
//     console.log('Step 1: Prepare ingredients');
//     setTimeout(() => {
//         console.log('Step 2: Cook food');
//         setTimeout(() => {
//             console.log('Step 3: Serve food');
//             setTimeout(() => {
//                 console.log('Step 4: Clean dishes');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);





//PROMISES


// let promise = new Promise(function (resolve, reject) {
//     let isLogin = false;
//     if (isLogin) {
//         setTimeout(() => {
//             resolve("You are logged in...")
//         });
//     } else {
//         reject("You are not logged in. Please Login")
//     }
// })
// console.log(promise)

// // console.log(promise)
// promise.then((res) => {
//     console.log("Then called: ", res)

// }).catch((err) => {
//     console.log("catch called: ", err)

// })

// async function getData() {
//     let result = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await result.json(); // Extract the JSON body
//     console.log(data);
// }
// getData();
