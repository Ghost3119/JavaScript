let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Cambia esta línea
let result = pwRegex.test(sampleWord);