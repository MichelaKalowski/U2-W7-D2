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
    add(newObject) {
        this.items.push(newObject);
}
}

let current_page=0;

function CreatePage(){
	for (let i=(current_page*p.pageSize); i<(current_page*p.pageSize)+p.pageSize;i++){
		
       
	}
}

