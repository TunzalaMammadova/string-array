"use strict"

// let word = "Azerbaycan";

// console.log(word.length);

// for (let i = 0; i < word.length; i++) {

//     console.log(word[i]);
// }


// console.log(word.toLocaleLowerCase());

// console.log(word.toUpperCase());

// console.log(word.trim());

// console.log(word.charAt(7));

// console.log(word.charCodeAt(9));


// let res = word.concat(" Respublikasi");

// console.log(res);


// console.log(word.slice(0,4));

// console.log(word.substring(1,5));


// let text = "msdv jusdvjbdw wdjkvw salam";

// let result = (text.substring(0,7)) + " ...";

// console.log(result);


// let response = word.replace("A","a");

// console.log(response);


// console.log(word.indexOf("b"));

// console.log(word.lastIndexOf("a"));

// console.log(word.replace("a", "b"));

// console.log(word.replaceAll("a", "b"));

// console.log(word.split(" "));


let stu1 = {
    id: 1,
    name: "Semed",
    surname: "Huseynov",
    age: 26,
    email: "s@code.edu.az"
};

let stu2 = {
    id: 2,
    name: "Elnur",
    surname: "Memmedov",
    age: 20,
    email: "e@code.edu.az"
};


let stu3 = {
    id: 3,
    name: "Tunzale",
    surname: "Memmedova",
    age: 24,
    email: "t@code.edu.az"
};


const students = [stu1, stu2, stu3];



function showStudentData(students, callback) {
    for (const student of students) {
        if (callback(student.age))
            console.log(student);
    }
}


function checkAge(age) {
    return age > 18 && age < 25
}


//showStudentData(students, checkAge);



function emailFind(students, callback) {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
        if (callback(students[i].email)) {
            count += 1;
        }
    }
    console.log(count);
}


function checkChar(str) {
    return str.includes('u')
}

//emailFind(students,checkChar);


// let ages = [22, 33, 44, 33, 88];

// let res = ages.toString();

// console.log(res);

// console.log(ages.flat(0));


const fruits = ["Banana", "Orange", "Apple", "Pear"]

// fruits.pop();

// fruits.push("Mango");

// fruits.shift();

// fruits.unshift("Mango");

// let res = fruits.filter(m=>m.includes("Banana"))

// fruits = fruits.filter(m=>!m.includes("Orange"))

// console.log(res);

// console.log(fruits);

// console.log(fruits.includes("Banana"));


// let result = fruits.find(m=>m.startsWith("B"));

// console.log(result);

// fruits.forEach((fruit, i) => {
//     (fruits[i] = fruit + " P418 ")
// });


// let result = fruits.map(m => {
//     return m + "P418"
// })

// console.log(fruits);

// console.log(result);
