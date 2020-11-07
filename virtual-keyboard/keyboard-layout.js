const keyLayout = [
  {
    en: '`',
    shiftEn: '~',
    ru: 'ё',
    shiftRu: 'Ё'
  },
  {
    en: '1',
    shiftEn: '!',
    ru: '1',
    shiftRu: '!'
  },
  {
    en: '2',
    shiftEn: '@',
    ru: '2',
    shiftRu: '"'
  },
  {
    en: '3',
    shiftEn: '#',
    ru: '3',
    shiftRu: '№'
  },
  {
    en: '4',
    shiftEn: '$',
    ru: '4',
    shiftRu: ';'
  },
  {
    en: '5',
    shiftEn: '%',
    ru: '5',
    shiftRu: '%'
  },
  {
    en: '6',
    shiftEn: '^',
    ru: '6',
    shiftRu: ':'
  },
  {
    en: '7',
    shiftEn: '&',
    ru: '7',
    shiftRu: '?'
  },
  {
    en: '8',
    shiftEn: '*',
    ru: '8',
    shiftRu: '*'
  },
  {
    en: '9',
    shiftEn: '(',
    ru: '9',
    shiftRu: '('
  },
  {
    en: '0',
    shiftEn: ')',
    ru: '0',
    shiftRu: ')'
  },
  {
    en: '-',
    shiftEn: '_',
    ru: '-',
    shiftRu: '_'
  },
  {
    en: '=',
    shiftEn: '+',
    ru: '=',
    shiftRu: '+'
  },
  {
    en: 'backspace',
    shiftEn: 'backspace',
    ru: 'backspace',
    shiftRu: 'backspace'
  },
  {
    en: 'done',
    shiftEn: 'done',
    ru: 'done',
    shiftRu: 'done'
  },
  {
    en: 'q',
    shiftEn: 'Q',
    ru: 'й',
    shiftRu: 'Й'
  },
  {
    en: 'w',
    shiftEn: 'W',
    ru: 'ц',
    shiftRu: 'Ц'
  },
  {
    en: 'e',
    shiftEn: 'E',
    ru: 'у',
    shiftRu: 'У'
  },
  {
    en: 'r',
    shiftEn: 'R',
    ru: 'к',
    shiftRu: 'К'
  },
  {
    en: 't',
    shiftEn: 'T',
    ru: 'е',
    shiftRu: 'Е'
  },
  {
    en: 'y',
    shiftEn: 'Y',
    ru: 'н',
    shiftRu: 'Н'
  },
  {
    en: 'u',
    shiftEn: 'U',
    ru: 'г',
    shiftRu: 'Г'
  },
  {
    en: 'i',
    shiftEn: 'I',
    ru: 'ш',
    shiftRu: 'Ш'
  },
  {
    en: 'o',
    shiftEn: 'O',
    ru: 'щ',
    shiftRu: 'Щ'
  },
  {
    en: 'p',
    shiftEn: 'P',
    ru: 'з',
    shiftRu: 'З'
  },
  {
    en: '[',
    shiftEn: '{',
    ru: 'х',
    shiftRu: 'Х'
  },
  {
    en: ']',
    shiftEn: '}',
    ru: 'ъ',
    shiftRu: 'Ъ'
  },
  {
    en: '\\',
    shiftEn: '|',
    ru: '\\',
    shiftRu: '/'
  },
  {
    en: 'caps',
    shiftEn: 'caps',
    ru: 'caps',
    shiftRu: 'caps'
  },
  {
    en: 'a',
    shiftEn: 'A',
    ru: 'ф',
    shiftRu: 'Ф'
  },
  {
    en: 's',
    shiftEn: 'S',
    ru: 'ы',
    shiftRu: 'Ы'
  },
  {
    en: 'd',
    shiftEn: 'D',
    ru: 'в',
    shiftRu: 'В'
  },
  {
    en: 'f',
    shiftEn: 'F',
    ru: 'а',
    shiftRu: 'А'
  },
  {
    en: 'g',
    shiftEn: 'G',
    ru: 'п',
    shiftRu: 'П'
  },
  {
    en: 'h',
    shiftEn: 'H',
    ru: 'р',
    shiftRu: 'Р'
  },
  {
    en: 'j',
    shiftEn: 'J',
    ru: 'о',
    shiftRu: 'О'
  },
  {
    en: 'k',
    shiftEn: 'K',
    ru: 'л',
    shiftRu: 'Л'
  },
  {
    en: 'l',
    shiftEn: 'L',
    ru: 'д',
    shiftRu: 'Д'
  },
  {
    en: ';',
    shiftEn: ':',
    ru: 'ж',
    shiftRu: 'Ж'
  },
  {
    en: "'",
    shiftEn: '"',
    ru: 'э',
    shiftRu: 'Э'
  },
  {
    en: 'enter',
    shiftEn: 'enter',
    ru: 'enter',
    shiftRu: 'enter'
  },
  {
    en: 'microphone',
    shiftEn: 'microphone',
    ru: 'microphone',
    shiftRu: 'microphone'
  },
  {
    en: 'shiftLeft',
    shiftEn: 'shiftLeft',
    ru: 'shiftLeft',
    shiftRu: 'shiftLeft'
  },
  {
    en: 'z',
    shiftEn: 'Z',
    ru: 'я',
    shiftRu: 'Я'
  },
  {
    en: 'x',
    shiftEn: 'X',
    ru: 'ч',
    shiftRu: 'Ч'
  },
  {
    en: 'c',
    shiftEn: 'C',
    ru: 'с',
    shiftRu: 'С'
  },
  {
    en: 'v',
    shiftEn: 'V',
    ru: 'м',
    shiftRu: 'М'
  },
  {
    en: 'b',
    shiftEn: 'B',
    ru: 'и',
    shiftRu: 'И'
  },
  {
    en: 'n',
    shiftEn: 'N',
    ru: 'т',
    shiftRu: 'Т'
  },
  {
    en: 'm',
    shiftEn: 'M',
    ru: 'ь',
    shiftRu: 'Ь'
  },
  {
    en: ',',
    shiftEn: '<',
    ru: 'б',
    shiftRu: 'Б'
  },
  {
    en: '.',
    shiftEn: '>',
    ru: 'ю',
    shiftRu: 'Ю'
  },
  {
    en: '/',
    shiftEn: '?',
    ru: '.',
    shiftRu: ','
  },
  {
    en: 'shiftRight',
    shiftEn: 'shiftRight',
    ru: 'shiftRight',
    shiftRu: 'shiftRight'
  },
  {
    en: 'up',
    shiftEn: 'up',
    ru: 'up',
    shiftRu: 'up'
  },
  {
    en: 'sound',
    shiftEn: 'sound',
    ru: 'sound',
    shiftRu: 'sound'
  },
  {
    en: 'lang',
    shiftEn: 'lang',
    ru: 'lang',
    shiftRu: 'lang'
  },
  {
    en: 'ctrlLeft',
    shiftEn: 'ctrlLeft',
    ru: 'ctrlLeft',
    shiftRu: 'ctrlLeft'
  },
  {
    en: 'altLeft',
    shiftEn: 'altLeft',
    ru: 'altLeft',
    shiftRu: 'altLeft'
  },
  {
    en: 'space',
    shiftEn: 'space',
    ru: 'space',
    shiftRu: 'space'
  },
  {
    en: 'altRight',
    shiftEn: 'altRight',
    ru: 'altRight',
    shiftRu: 'altRight'
  },
  {
    en: 'ctrlRight',
    shiftEn: 'ctrlRight',
    ru: 'ctrlRight',
    shiftRu: 'ctrlRight'
  },
  {
    en: 'left',
    shiftEn: 'left',
    ru: 'left',
    shiftRu: 'left'
  },
  {
    en: 'down',
    shiftEn: 'down',
    ru: 'down',
    shiftRu: 'down'
  },
  {
    en: 'right',
    shiftEn: 'right',
    ru: 'right',
    shiftRu: 'right'
  }
];

const gridAreaProperties = {
  '`': {
    desktop: '1 / 1 / span 2 / span 2',
    mobile: '1 / 1 / span 2 / span 2'
  },
  '1': {
    desktop: '1 / 3 / span 2 / span 2',
    mobile: '1 / 3 / span 2 / span 2'
  },
  '2': {
    desktop: '1 / 5 / span 2 / span 2',
    mobile: '1 / 5 / span 2 / span 2'
  },
  '3': {
    desktop: '1 / 7 / span 2 / span 2',
    mobile: '1 / 7 / span 2 / span 2'
  },
  '4': {
    desktop: '1 / 9 / span 2 / span 2',
    mobile: '1 / 9 / span 2 / span 2'
  },
  '5': {
    desktop: '1 / 11 / span 2 / span 2',
    mobile: '1 / 11 / span 2 / span 2'
  },
  '6': {
    desktop: '1 / 13 / span 2 / span 2',
    mobile: '1 / 13 / span 2 / span 2'
  },
  '7': {
    desktop: '1 / 15 / span 2 / span 2',
    mobile: '1 / 15 / span 2 / span 2'
  },
  '8': {
    desktop: '1 / 17 / span 2 / span 2',
    mobile: '1 / 17 / span 2 / span 2'
  },
  '9': {
    desktop: '1 / 19 / span 2 / span 2',
    mobile: '1 / 19 / span 2 / span 2'
  },
  '0': {
    desktop: '1 / 21 / span 2 / span 2',
    mobile: '1 / 21 / span 2 / span 2'
  },
  '-': {
    desktop: '1 / 23 / span 2 / span 2',
    mobile: '1 / 23 / span 2 / span 2'
  },
  '=': {
    desktop: '1 / 25 / span 2 / span 2',
    mobile: '1 / 25 / span 2 / span 2'
  },
  backspace: {
    desktop: '1 / 27 / span 2 / end',
    mobile: '1 / 27 / span 2 / end'
  },
  done: {
    desktop: '3 / 1 / span 2 / span 3',
    mobile: '3 / 1 / span 2 / span 3'
  },
  q: {
    desktop: '3 / 4 / span 2 / span 2',
    mobile: '3 / 4 / span 2 / span 2'
  },
  w: {
    desktop: '3 / 6 / span 2 / span 2',
    mobile: '3 / 6 / span 2 / span 2'
  },
  e: {
    desktop: '3 / 8 / span 2 / span 2',
    mobile: '3 / 8 / span 2 / span 2'
  },
  r: {
    desktop: '3 / 10 / span 2 / span 2',
    mobile: '3 / 10 / span 2 / span 2'
  },
  t: {
    desktop: '3 / 12 / span 2 / span 2',
    mobile: '3 / 12 / span 2 / span 2'
  },
  y: {
    desktop: '3 / 14 / span 2 / span 2',
    mobile: '3 / 14 / span 2 / span 2'
  },
  u: {
    desktop: '3 / 16 / span 2 / span 2',
    mobile: '3 / 16 / span 2 / span 2'
  },
  i: {
    desktop: '3 / 18 / span 2 / span 2',
    mobile: '3 / 18 / span 2 / span 2'
  },
  o: {
    desktop: '3 / 20 / span 2 / span 2',
    mobile: '3 / 20 / span 2 / span 2'
  },
  p: {
    desktop: '3 / 22 / span 2 / span 2',
    mobile: '3 / 22 / span 2 / span 2'
  },
  '[': {
    desktop: '3 / 24 / span 2 / span 2',
    mobile: '3 / 24 / span 2 / span 2'
  },
  ']': {
    desktop: '3 / 26 / span 2 / span 2',
    mobile: '3 / 26 / span 2 / span 2'
  },
  '\\': {
    desktop: '3 / 28 / span 2 / end',
    mobile: '3 / 28 / span 2 / end'
  },
  caps: {
    desktop: '5 / 1 / span 2 / span 4',
    mobile: '5 / 1 / span 2 / span 4'
  },
  a: {
    desktop: '5 / 5 / span 2 / span 2',
    mobile: '5 / 5 / span 2 / span 2'
  },
  s: {
    desktop: '5 / 7 / span 2 / span 2',
    mobile: '5 / 7 / span 2 / span 2'
  },
  d: {
    desktop: '5 / 9 / span 2 / span 2',
    mobile: '5 / 9 / span 2 / span 2'
  },
  f: {
    desktop: '5 / 11 / span 2 / span 2',
    mobile: '5 / 11 / span 2 / span 2'
  },
  g: {
    desktop: '5 / 13 / span 2 / span 2',
    mobile: '5 / 13 / span 2 / span 2'
  },
  h: {
    desktop: '5 / 15 / span 2 / span 2',
    mobile: '5 / 15 / span 2 / span 2'
  },
  j: {
    desktop: '5 / 17 / span 2 / span 2',
    mobile: '5 / 17 / span 2 / span 2'
  },
  k: {
    desktop: '5 / 19 / span 2 / span 2',
    mobile: '5 / 19 / span 2 / span 2'
  },
  l: {
    desktop: '5 / 21 / span 2 / span 2',
    mobile: '5 / 21 / span 2 / span 2'
  },
  ';': {
    desktop: '5 / 23 / span 2 / span 2',
    mobile: '5 / 23 / span 2 / span 2'
  },
  "'": {
    desktop: '5 / 25 / span 2 / span 2',
    mobile: '5 / 25 / span 2 / span 2'
  },
  enter: {
    desktop: '5 / 27 / span 2 / end',
    mobile: '5 / 27 / span 2 / end'
  },
  microphone: {
    desktop: '7 / 1 / span 2 / span 2',
    mobile: '7 / 1 / span 2 / span 2'
  },
  shiftLeft: {
    desktop: '7 / 3 / span 2 / span 3',
    mobile: '7 / 3 / span 2 / span 3'
  },
  z: {
    desktop: '7 / 6 / span 2 / span 2',
    mobile: '7 / 6 / span 2 / span 2'
  },
  x: {
    desktop: '7 / 8 / span 2 / span 2',
    mobile: '7 / 8 / span 2 / span 2'
  },
  c: {
    desktop: '7 / 10 / span 2 / span 2',
    mobile: '7 / 10 / span 2 / span 2'
  },
  v: {
    desktop: '7 / 12 / span 2 / span 2',
    mobile: '7 / 12 / span 2 / span 2'
  },
  b: {
    desktop: '7 / 14 / span 2 / span 2',
    mobile: '7 / 14 / span 2 / span 2'
  },
  n: {
    desktop: '7 / 16 / span 2 / span 2',
    mobile: '7 / 16 / span 2 / span 2'
  },
  m: {
    desktop: '7 / 18 / span 2 / span 2',
    mobile: '7 / 18 / span 2 / span 2'
  },
  ',': {
    desktop: '7 / 20 / span 2 / span 2',
    mobile: '7 / 20 / span 2 / span 2'
  },
  '.': {
    desktop: '7 / 22 / span 2 / span 2',
    mobile: '7 / 22 / span 2 / span 2'
  },
  '/': {
    desktop: '7 / 24 / span 2 / span 2',
    mobile: '7 / 24 / span 2 / span 2'
  },
  shiftRight: {
    desktop: '7 / 26 / span 2 / end',
    mobile: '7 / 26 / span 2 / end'
  },
  sound: {
    desktop: '9 / 1 / span 2 / span 2',
    mobile: '9 / 1 / span 2 / span 2'
  },
  lang: {
    desktop: '9 / 3 / span 2 / span 4',
    mobile: '9 / 3 / span 2 / span 4'
  },
  ctrlLeft: {
    desktop: '9 / 7 / span 2 / span 2',
    mobile: '9 / 7 / span 2 / span 2'
  },
  altLeft: {
    desktop: '9 / 9 / span 2 / span 2',
    mobile: '9 / 9 / span 2 / span 2'
  },
  space: {
    desktop: '9 / 11 / span 2 / span 10',
    mobile: '9 / 11 / span 2 / span 10'
  },
  altRight: {
    desktop: '9 / 21 / span 2 / span 2',
    mobile: '9 / 21 / span 2 / span 2'
  },
  ctrlRight: {
    desktop: '9 / 23 / span 2 / span 2',
    mobile: '9 / 23 / span 2 / span 2'
  },
  left: {
    desktop: '9 / 25 / span 2 / span 2',
    mobile: '9 / 25 / span 2 / span 2'
  },
  up: {
    desktop: '9 / 27 / span 1 / span 2',
    mobile: '9 / 27 / span 1 / span 2'
  },
  down: {
    desktop: '10 / 27 / span 1 / span 2',
    mobile: '10 / 27 / span 1 / span 2'
  },
  right: {
    desktop: '9 / 29 / span 2 / end',
    mobile: '9 / 29 / span 2 / end'
  }
};

const EnToRu = {
  '`': 'ё',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '0': '0',
  '-': '-',
  '=': '=',
  backspace: 'backspace',
  done: 'done',
  q: 'й',
  w: 'ц',
  e: 'у',
  r: 'к',
  t: 'е',
  y: 'н',
  u: 'г',
  i: 'ш',
  o: 'щ',
  p: 'з',
  '[': 'х',
  ']': 'ъ',
  '\\': '\\',
  caps: 'caps',
  a: 'ф',
  s: 'ы',
  d: 'в',
  f: 'а',
  g: 'п',
  h: 'р',
  j: 'о',
  k: 'л',
  l: 'д',
  ';': 'ж',
  "'": 'э',
  enter: 'enter',
  microphone: 'microphone',
  shiftLeft: 'shiftLeft',
  z: 'я',
  x: 'ч',
  c: 'с',
  v: 'м',
  b: 'и',
  n: 'т',
  m: 'ь',
  ',': 'б',
  '.': 'ю',
  '/': '.',
  shiftRight: 'shiftRight',
  up: 'up',
  lang: 'lang',
  ctrlLeft: 'ctrlLeft',
  altLeft: 'altLeft',
  space: 'space',
  sound: 'sound',
  altRight: 'altRight',
  ctrlRight: 'ctrlRight',
  left: 'left',
  down: 'down',
  right: 'right'
};

const EnToShiftRu = {
  '`': 'Ё',
  '1': '!',
  '2': '"',
  '3': '№',
  '4': ';',
  '5': '%',
  '6': ':',
  '7': '?',
  '8': '*',
  '9': '(',
  '0': ')',
  '-': '_',
  '=': '+',
  backspace: 'backspace',
  done: 'done',
  q: 'Й',
  w: 'Ц',
  e: 'У',
  r: 'К',
  t: 'Е',
  y: 'Н',
  u: 'Г',
  i: 'Ш',
  o: 'Щ',
  p: 'З',
  '[': 'Х',
  ']': 'Ъ',
  '\\': '/',
  caps: 'caps',
  a: 'Ф',
  s: 'Ы',
  d: 'В',
  f: 'А',
  g: 'П',
  h: 'Р',
  j: 'О',
  k: 'Л',
  l: 'Д',
  ';': 'Ж',
  "'": 'Э',
  enter: 'enter',
  microphone: 'microphone',
  shiftLeft: 'shiftLeft',
  z: 'Я',
  x: 'Ч',
  c: 'С',
  v: 'М',
  b: 'И',
  n: 'Т',
  m: 'Ь',
  ',': 'Б',
  '.': 'Ю',
  '/': ',',
  shiftRight: 'shiftRight',
  up: 'up',
  lang: 'lang',
  ctrlLeft: 'ctrlLeft',
  altLeft: 'altLeft',
  space: 'space',
  sound: 'sound',
  altRight: 'altRight',
  ctrlRight: 'ctrlRight',
  left: 'left',
  down: 'down',
  right: 'right'
};

const EnShift = {
  '`': '~',
  '1': '!',
  '2': '@',
  '3': '#',
  '4': '$',
  '5': '%',
  '6': '^',
  '7': '&',
  '8': '*',
  '9': '(',
  '0': ')',
  '-': '_',
  '=': '+',
  backspace: 'backspace',
  done: 'done',
  q: 'Q',
  w: 'W',
  e: 'E',
  r: 'R',
  t: 'T',
  y: 'Y',
  u: 'U',
  i: 'I',
  o: 'O',
  p: 'P',
  '[': '{',
  ']': '}',
  '\\': '|',
  caps: 'caps',
  a: 'A',
  s: 'S',
  d: 'D',
  f: 'F',
  g: 'G',
  h: 'H',
  j: 'J',
  k: 'K',
  l: 'L',
  ';': ':',
  "'": '"',
  enter: 'enter',
  microphone: 'microphone',
  shiftLeft: 'shiftLeft',
  z: 'Z',
  x: 'X',
  c: 'C',
  v: 'V',
  b: 'B',
  n: 'N',
  m: 'M',
  ',': '<',
  '.': '>',
  '/': '?',
  shiftRight: 'shiftRight',
  up: 'up',
  lang: 'lang',
  ctrlLeft: 'ctrlLeft',
  altLeft: 'altLeft',
  space: 'space',
  sound: 'sound',
  altRight: 'altRight',
  ctrlRight: 'ctrlRight',
  left: 'left',
  down: 'down',
  right: 'right'
};

const keyboardCodesToIds = {
  Backquote: '`',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'backspace',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  CapsLock: 'caps',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  Quote: "'",
  Enter: 'enter',
  ShiftLeft: 'shiftLeft',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ShiftRight: 'shiftLeft',
  ControlLeft: 'ctrlLeft',
  AltLeft: 'altLeft',
  Space: 'space',
  AltRight: 'altRight',
  ControlRight: 'ctrlRight',
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  Delete: 'del'
};

const keyboardCodesWithoughtSpecialCodes = {
  Backquote: '`',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  Quote: "'",
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/'
};

const specialKeys = [
  'backspace',
  'done',
  'caps',
  'enter',
  'microphone',
  'shiftLeft',
  'shiftRight',
  'ctrlLeft',
  'ctrlRight',
  'altLeft',
  'altRight',
  'up',
  'down',
  'left',
  'right',
  'lang',
  'space',
  'sound'
];

const specialKeysForSelection = [
  'done',
  'caps',
  'microphone',
  'shiftLeft',
  'shiftRight',
  'ctrlLeft',
  'ctrlRight',
  'altLeft',
  'altRight',
  'up',
  'down',
  'left',
  'right',
  'lang',
  'sound'
];

// const regularKeys = [
//   '`',
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '0',
//   '-',
//   '=',
//   'q',
//   'w',
//   'e',
//   'r',
//   't',
//   'y',
//   'u',
//   'i',
//   'o',
//   'p',
//   '[',
//   ']': '}',
//   '\\': '|',
//   caps: 'caps',
//   a: 'A',
//   s: 'S',
//   d: 'D',
//   f: 'F',
//   g: 'G',
//   h: 'H',
//   j: 'J',
//   k: 'K',
//   l: 'L',
//   ';': ':',
//   "'": '"',
//   enter: 'enter',
//   microphone: 'microphone',
//   shiftLeft: 'shiftLeft',
//   z: 'Z',
//   x: 'X',
//   c: 'C',
//   v: 'V',
//   b: 'B',
//   n: 'N',
//   m: 'M',
//   ',': '<',
//   '.': '>',
//   '/': '?',
// ];
