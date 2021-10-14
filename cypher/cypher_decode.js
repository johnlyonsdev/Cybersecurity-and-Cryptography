const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter the message you would like decoded:", function(input){
    input = input.toLowerCase()
    words = input.split(' ')

    for ( i=0;i<words.length;i++) {
        letterArr = words[i].split("")
        for(let j = 0;j<letterArr.length;j++) {
            if (letterArr[j] === 'a') {
                 letterArr[j] = 'w'
            } else if (letterArr[j] === 'b') {
             letterArr[j] = 'x'
        } else if (letterArr[j] === 'c') {
         letterArr[j] = 'z'
    } else if (letterArr[j] === 'd') {
     letterArr[j] = 'a'
 } else if (letterArr[j] === 'e') {
     letterArr[j] = 'b'
 } else if (letterArr[j] === 'f') {
     letterArr[j] = 'c'
 } else if (letterArr[j] === 'g') {
     letterArr[j] = 'd'
 } else if (letterArr[j] === 'i') {
     letterArr[j] = 'e'
 } else if (letterArr[j] === 'k') {
     letterArr[j] = 'f'
 } else if (letterArr[j] === 'm') {
     letterArr[j] = 'g'
 } else if (letterArr[j] === 'p') {
     letterArr[j] = 'i'
 } else if (letterArr[j] === 'q') {
     letterArr[j] = 'k'
 } else if (letterArr[j] === 'r') {
     letterArr[j] = 'm'
 } else if (letterArr[j] === 't') {
     letterArr[j] = 'p'
 } else if (letterArr[j] === 'u') {
     letterArr[j] = 'q'
 } else if (letterArr[j] === 'v') {
     letterArr[j] = 'r'
 } else if (letterArr[j] === 'w') {
     letterArr[j] = 't'
 } else if (letterArr[j] === 'x') {
     letterArr[j] = 'u'
 }else if (letterArr[j] === 'z') {
     letterArr[j] = 'v'
 }
        }
        words[i] = letterArr.join('')
     }
     let code = words.join(' ')
     console.log(code)
     reader.close()
 });