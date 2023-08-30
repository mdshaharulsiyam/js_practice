class Siyam {
    constructor(name, age, salery) {
        this.studentname = name;
        this.studentage = age;
        this.salery = salery;
    }

    helow() {
        console.log(this.studentname + ', your age is ' + this.studentage + ' ' + this.salery);
    }

    static staticmethod() {
        console.log('static method');
    }
}

let test ='this is a test msg'

export { Siyam,test};