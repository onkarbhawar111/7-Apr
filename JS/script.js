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

