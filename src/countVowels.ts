function getCount(str: string): number {
  let vowelsCount = 0;
  for (const character of str) {
    if (isAVowel(character)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

function isAVowel(character: string) {
  return (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u" ||
    false
  );
}

export default getCount;
