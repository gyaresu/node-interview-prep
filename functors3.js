let stringFunctor = (value, fn) => {
  // value is 'ABC'
  // value is 'YXZ'
  let chars = value.split('')
  // now the strings are an array ['A', 'B', 'C'] || [ 'Y', 'X', 'Z' ]

  // .map takes each character 'A' || 'Y'
  return chars.map(char => {
    // 'A'.charCodeAt(0) /// 65
    // 'A'.charCodeAt(0) /// 89
    // fn(65) /// plus1(65) /// 66
    // fn(89) /// minus1(89) /// 88
    // String.fromCharCode(66) /// 'B'
    // String.fromCharCode(88) /// 'Y'
    return String.fromCharCode(fn(char.charCodeAt(0)))
  }).join('')
  // 'BCD'
  // 'XW'
}

let plus1 = value => {
  return value + 1
}

let minus1 = value => {
  return value - 1
}

let a = [3, 4].map(plus1) // returns [4, 5]
let b = stringFunctor('ABC', plus1) // returns 'BCD'
let c = stringFunctor('XYZ', minus1) // returns 'WXY' /// example says 'RXY'?

console.log(a, b, c)
