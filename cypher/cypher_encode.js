const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter the message you would like encoded:", function(input){
    input = input.toLowerCase()
    words = input.split(' ')

    for ( i=0;i<words.length;i++) {
       letterArr = words[i].split("")
       for(let j = 0;j<letterArr.length;j++) {
           if (letterArr[j] === 'a') {
                letterArr[j] = 'd'
           } else if (letterArr[j] === 'b') {
            letterArr[j] = 'e'
       } else if (letterArr[j] === 'c') {
        letterArr[j] = 'f'
   } else if (letterArr[j] === 'd') {
    letterArr[j] = 'g'
} else if (letterArr[j] === 'e') {
    letterArr[j] = 'i'
} else if (letterArr[j] === 'f') {
    letterArr[j] = 'k'
} else if (letterArr[j] === 'g') {
    letterArr[j] = 'm'
} else if (letterArr[j] === 'i') {
    letterArr[j] = 'p'
} else if (letterArr[j] === 'k') {
    letterArr[j] = 'q'
} else if (letterArr[j] === 'm') {
    letterArr[j] = 'r'
} else if (letterArr[j] === 'p') {
    letterArr[j] = 't'
} else if (letterArr[j] === 'q') {
    letterArr[j] = 'u'
} else if (letterArr[j] === 'r') {
    letterArr[j] = 'v'
} else if (letterArr[j] === 't') {
    letterArr[j] = 'w'
} else if (letterArr[j] === 'u') {
    letterArr[j] = 'x'
} else if (letterArr[j] === 'v') {
    letterArr[j] = 'z'
} else if (letterArr[j] === 'w') {
    letterArr[j] = 'a'
} else if (letterArr[j] === 'x') {
    letterArr[j] = 'b'
}else if (letterArr[j] === 'z') {
    letterArr[j] = 'c'
}
       }
       words[i] = letterArr.join('')
    }
    let code = words.join(' ')
    console.log(code)
    reader.close()
});