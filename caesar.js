const caesar = (str, shift, action) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let moveStep = Math.abs(shift) > 26 ? shift % 26 : shift;
  if (action === 'decode') moveStep *= -1;

  const outputCipher = str.toString().split('').map((char) => {
    const matchInAlphabet = alphabet.indexOf(char.toLowerCase());
    if (matchInAlphabet !== -1) {
      let newIndex = matchInAlphabet + moveStep;
      if (newIndex < 0) newIndex += 26;
      if (newIndex > 25) newIndex -= 26;
      return char.toLowerCase() === char ? alphabet[newIndex] : alphabet[newIndex].toUpperCase();
    } else {
      return char;
    }
  });

  return outputCipher.join('');
};

export default caesar;