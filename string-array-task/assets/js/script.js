"use strict"


function reverseName(text) {
    let result = " "
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result;
}

//console.log(reverseName("Tunzale"));



function getDate(age) {
    return new Date().getFullYear() - age;
}

//console.log(getDate(30));




let person1 = {
    id: 1,
    name: "Tunzale",
    fullName: "Tunzale Memmedova",
    age: 25,
    salary: 500
};

let person2 = {
    id: 2,
    name: "Elnur",
    fullName: "Elnur Memmedov",
    age: 20,
    salary: 300
};

let person3 = {
    id: 3,
    name: "Nergiz",
    fullName: "Nergiz Memmedova",
    age: 26,
    salary: 1500
};

let person4 = {
    id: 4,
    name: "Semed",
    fullName: "Semed Huseynov",
    age: 27,
    salary: 2500
};



const persons = [person1, person2, person3, person4];



function getCountPersons() {
    let count = 0;
    for (const person of persons) {
        count++;
    }
    return count;
}


//console.log(getCountPersons());




function getAverageSalary() {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < persons.length; i++) {
        sum += persons[i].salary;
        average = sum / persons.length

    }
    return average;
}


//console.log(getAverageSalary());




function search(searchText) {

    searchText.search(persons.fullName)

    for (const person of persons) {
        return person.name + " - " + person.age + " - " + person.salary
    }
}

//console.log(search("Tunzale"))





