module.exports.pangram = function (word: string | number): boolean {
  const wordString = word.toString();
  
  if (isNaN(Number(wordString))) {
    // Проверка на панграмму для букв
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uniqueChars = new Set(wordString.toLowerCase().replace(/[^a-z]/g, ''));
    return uniqueChars.size === alphabet.length;
  } else {
    // Проверка на панграмму для цифр
    const digits = '0123456789';
    const uniqueDigits = new Set(wordString.replace(/\D/g, ''));
    return uniqueDigits.size === digits.length;
  }
};
