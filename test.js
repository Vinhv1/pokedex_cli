// class Animal {
//     constructor(type, name){
//         this.type = type;
//         this.name = name;
//     }
// }

// const monkey = new Animal("monkey", "Abu");
// console.log(monkey);

// const fish = new Animal("fish", "Nemo");
// console.log(fish);

class Student {
    constructor(name, major, grades)
    {
        this.name = name
        this.major = major
        this.grades = grades
    }

    addGrade(grade) {
        this.grades.push(grade)
    }
}