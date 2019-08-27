import './motorcycle.jpeg';
import './apple.png';
import './main.css';
import 'core-js';
import MyLibrary from './my-library.js';

MyLibrary();

class Foo {
    constructor(name) {
        this.name = name;
    }
}

// Promise.resolve(10);

console.log(new Foo('pesho').foo());