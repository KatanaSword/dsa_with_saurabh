


var reverseWords = function(s) {
    let result = []
    let length = s.length

    let word = ""

    for (let i = 0; i < length; i++) {
      if (s[i] !== " ") {
        word += s[i]
      } else if (word.length > 0) {
        result.unshift(word)
        word = ""
      }
      
    }

    if (word.length > 0) {
      result.unshift(word)
    }

    return result.join(" ")


};

s = "the sky is blue"
console.log(reverseWords(s))

