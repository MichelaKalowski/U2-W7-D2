//*ESERCIZIO 1*//

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    compareAge(person2) {
        if (this.age >= person2.age) {
            return this.name + "è più vecchio di " + person2.name
        } else {
            return person2.name + " è più vecchio di " + this.name
        }
    }
}


let p1 = new Person("Mario", 30)
let p2 = new Person("Luigi", 35)
let p3 = new Person("Tizio", 40)


console.log(p1.compareAge(p2))
console.log(p2.compareAge(p3))
console.log(p3.compareAge(p1))



//*ESERCIZIO 2*//

class Page {
    constructor(items=[], pageSize) {
        this.items = []
        this.pageSize = pageSize
    }
}


let currentPage=0
buildTable() {
for(currentPage*Page.pageSize; i>= (currentPage*Page.pageSize) + pageSize; i++){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
}

}