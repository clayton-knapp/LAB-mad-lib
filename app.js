// import functions and grab DOM elements

import {fillWords} from './utils.js';

const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const word3 = document.getElementById('word3');
const word4 = document.getElementById('word4');
const word5 = document.getElementById('word5');
const word6 = document.getElementById('word6');
const word7 = document.getElementById('word7');
const word8 = document.getElementById('word8');
const word9 = document.getElementById('word9');
const word10 = document.getElementById('word10');

const word1Input = document.getElementById('word1-input');
const word2Input = document.getElementById('word2-input');
const word3Input = document.getElementById('word3-input');
const word4Input = document.getElementById('word4-input');
const word5Input = document.getElementById('word5-input');
const word6Input = document.getElementById('word6-input');
const word7Input = document.getElementById('word7-input');
const word8Input = document.getElementById('word8-input');
const word9Input = document.getElementById('word9-input');
const word10Input = document.getElementById('word10-input');

const generateButton = document.getElementById('generate-button');
const inputForm = document.getElementById('input-form');
const madlib = document.getElementById('madlib');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


generateButton.addEventListener('click', () =>{
  fillWords(word1Input, word1);
  fillWords(word2Input, word2);
  fillWords(word3Input, word3);
  fillWords(word4Input, word4);
  fillWords(word5Input, word5);
  fillWords(word6Input, word6);
  fillWords(word7Input, word7);
  fillWords(word8Input, word8);
  fillWords(word9Input, word9);
  fillWords(word10Input, word10);
  
  inputForm.style.display = 'none';
  madlib.style.display = 'block';


  // word1.textContent = word1Input.value;
  // word2.textContent = word2Input.value;
  // word3.textContent = word3Input.value;
  // word4.textContent = word4Input.value;
  // word5.textContent = word5Input.value;
  // word6.textContent = word6Input.value;
  // word7.textContent = word7Input.value;
  // word8.textContent = word8Input.value;
  // word9.textContent = word9Input.value;
  // word10.textContent = word10Input.value;
});