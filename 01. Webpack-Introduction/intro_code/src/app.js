const MyLibrary = require('./my-library');

MyLibrary();
console.log('Hello world!')

class Foo {
    constructor(name) {
        this.name = name;
    }
}

console.log(new Foo('pesho').name);