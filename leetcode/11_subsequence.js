
//i.e., "ace", "" is a subsequence of "abcde" while "aec" is not).
var isSubsequence = function(s, t) {
    let sIndex = 0

    for (const char of t) {
      if(sIndex === s.length) break
      if(s[sIndex] === char) sIndex++
    }

    return sIndex === s.length
};