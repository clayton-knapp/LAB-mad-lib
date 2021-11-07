// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { fillWords } from "../utils.js";

const test = QUnit.test;

test('time to test a function - if we input the string Prince we expect the span to display Prince', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // tricky bit I done understand - creating temporary Elements for input and span?
    const input = document.createElement('input');
    const span = document.createElement('span');
    const expected = 'Prince';
    input.value = expected;
    
    //Act 
    // Call the function you're testing and set the result to a const
    fillWords(input, span);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(span.textContent, expected);
});
