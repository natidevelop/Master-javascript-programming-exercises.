function getAllLetters(str) {
    let letters=[];
    for (let index = 0; index < str.length; index++) {
    letters.push(str[index]);
    }
   return letters;
  }

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
