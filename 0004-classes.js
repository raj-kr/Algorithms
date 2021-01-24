document.title = 'Classes';

class Employee {
    constructor(givenName, giveExperience, givenDivision) {
        this.name = givenName;
        this.experience = giveExperience;
        this.division = givenDivision;
    }
    introduce() {
        return `Hello all, my name is ${this.name}`;
    }
    workExperience() {
        return `My work experince is ${this.experience} years`;
    }

    static freelance() {
        return 'I also do freelancing on upwork';
    }
}

class Developer extends Employee {
    constructor(givenName, giveExperience, givenDivision, language, github) {
        super(givenName, giveExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage () {
        return `I have ${this.experience} years experience in ${this.language}`;
    }
}

let emp1 = new Employee('Raj', 2, 'bigData');
let dev1 = new Developer('Raj', 3, 'mern', 'javascript', 'raj-kr');

console.log('favorite language:', dev1.favoriteLanguage());