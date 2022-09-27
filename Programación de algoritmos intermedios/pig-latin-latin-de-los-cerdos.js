function translatePigLatin(str) {
  let regexVocal = str.search(/[aeiou]/);
  return regexVocal === 0 ? str + 'way' : str.substring(regexVocal) + str.substring(0, regexVocal) + 'ay';
}

translatePigLatin("consonant");