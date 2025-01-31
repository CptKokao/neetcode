// https://neetcode.io/problems/is-anagram

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const first = s.split("").sort().join("");
    const second = t.split("").sort().join("");

    return first === second;
  }
}

// 2 - 	HASH
// Нужно взять любую строку и запустить цикл
// при каждой итерации буква в слове является ключом
// после обращения по ключу если ранее его не было то null || 0 + 1
// так после цикла мы составим карту с ключами и значениями где буква будет равняться количеству вхождений в слове
// Дальше в цикле проходим по любому сгенерированному объекту и сравниваем значения его ключей
// если они не равны то false

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const countS = {};
    const countT = {};

    // s="racecar"
    // t="carrace"

    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = (countS[s[i]] || 0) + 1;
      countT[t[i]] = (countT[t[i]] || 0) + 1;
    }

    // { r: 2, a: 2, c: 2, e: 1 }
    // { r: 2, a: 2, c: 2, e: 1 }

    for (const key in countS) {
      if (countS[key] !== countT[key]) {
        return false;
      }
    }
    return true;
  }
}
