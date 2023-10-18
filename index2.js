class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    my() {
        return `Мене звати ${this.firstName} ${this.lastName} й мені ${this.age} років.`;
    }
}

class newPerson extends Person {
    constructor(firstName, lastName, age, work) {
        super(firstName, lastName, age)
        this.work = work;
    }

    mineLive() {
        return `Я ${this.work}.`;
    }
}

const newPersons = new newPerson('Василь', 'Павліш', '21','тестувальник');
console.log(newPersons.my()); //Вивід: Мене звати Василь Павліш й мені 21 років.
console.log(newPersons.mineLive()); //Вивід: Я тестувальник.