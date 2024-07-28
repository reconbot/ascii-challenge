const start = 32
const end = 122

const items = []

const numberToBinary = (num) => {
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
      throw new Error('Input must be a non-negative integer.');
  }
  let binaryString = num.toString(2);
  while (binaryString.length < 8) {
      binaryString = '0' + binaryString;
  }

  return binaryString;
}

const names = new Map()

names.set(32, "Space")
names.set(33, "Bang")
names.set(34, "Double quotes")
names.set(35, "Hash")
names.set(36, "Dollar sign")
names.set(37, "Percent")
names.set(38, "Ampersand")
names.set(39, "Single quote")
names.set(40, "Left paren")
names.set(41, "Right paren")
names.set(42, "Asterisk")
names.set(43, "Plus sign")
names.set(44, "Comma")
names.set(45, "Hyphen")
names.set(46, "Period")
names.set(47, "Slash")
names.set(58, "Colon")
names.set(59, "Semicolon")
names.set(60, "Less than")
names.set(61, "Equals sign")
names.set(62, "Greater than")
names.set(63, "Question mark")
names.set(64, "At sign")
names.set(91, "Left bracket")
names.set(92, "Backslash")
names.set(93, "Right bracket")
names.set(94, "Caret")
names.set(95, "Underscore")
names.set(96, "Grave accent")

const generateName = (charCode) => {
  if (names.has(charCode)) {
    return names.get(charCode)
  }
  const char = String.fromCharCode(charCode)
  if (/[a-z]/.test(char) || /[A-Z]/.test(char)) {
    return `Char ${char}`
  }

  if (/[0-9]/.test(char)) {
    return `Digit ${char}`
  }

  return char
}

for (let charCode = start; charCode <= end; charCode++) {
  items.push({
    "binary": numberToBinary(charCode),
    "dec": charCode,
    "char": String.fromCharCode(charCode),
    "name": generateName(charCode),
  })
}

const transformed = items.reduce((acc, {binary, ...x}) => { acc[binary] = x; return acc}, {})

console.table(transformed)
