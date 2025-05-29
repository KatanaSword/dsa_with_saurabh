/*
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
*/
/*
{
  a: 2
  b: 3
}

{
  b: 3
  a: 4
}
1. length
2. FM1 and FM2
3. FM -> keys compare size
4. haveSameCharacters
5. values -> Array -> Sort
6. array -> string -> compare
*/

var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
      return false
    }

    const frequencyMap1 = new Map()
    const frequencyMap2 = new Map()

    for (const character of word1) {
      frequencyMap1.set(character, (frequencyMap1.get(character) || 0) + 1)
    }

    for (const character of word2) {
      frequencyMap2.set(character, (frequencyMap2.get(character) || 0) + 1)
    }

    const characters1 = new Set(frequencyMap1.keys())
    const characters2 = new Set(frequencyMap2.keys())

    if (characters1.size !== characters2.size) {
      return false
    }

    const haveSameCharacters = [...characters1].every(char => characters2.has(char))

    if (!haveSameCharacters) {
      return false
    }

    const sortedFrequency1 = Array.from(frequencyMap1.values()).sort((a, b) => a-b)
    const sortedFrequency2 = Array.from(frequencyMap2.values()).sort((a, b) => a-b)

    const areFrequencyIdentical = sortedFrequency1.join(',') === sortedFrequency2.join(',')

    if (!areFrequencyIdentical) {
      return false
    }

    return true
};