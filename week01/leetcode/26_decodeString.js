

"3[a]2[bc]"
var decodeString = function(s) {
  let stack = []
  let currentNum = 0
  let currentStr = ''
  
  for (const char of s) {
    if(char >= '0' && char <= '9'){
      currentNum = currentNum * 10 + (char - '0')
    }else if (char === '[') {
      stack.push(currentNum)
      stack.push(currentStr)

      //reset
      currentNum = 0
      currentStr = ''
    } else if (char === ']') {
      let prevStr = stack.pop()
      let repeatTimes = stack.pop()

      currentStr = prevStr + currentStr.repeat(repeatTimes)
    } else {
      currentStr += char
    }
  }
  return currentStr
};