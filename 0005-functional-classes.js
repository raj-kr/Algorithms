'use strict';

document.title = 'Functional Classes';

function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = getInformation;
}

function getInformation() {
    return 'This ' + this.type + ' is ' + this.color +'';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());
