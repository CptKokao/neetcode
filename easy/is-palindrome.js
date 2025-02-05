class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const cleanText = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
    return cleanText === cleanText.split("").reverse().join("");
  }
}

// Интересно решение поиска букв и цифр isAlphanumeric вместо regex
class Solution {
  /**
   * Check if a character is alphanumeric
   * @param {char} char
   * @return {boolean}
   */
  isAlphanumeric(char) {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    );
  }

  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let newStr = "";
    for (let c of s) {
      if (this.isAlphanumeric(c)) {
        newStr += c.toLowerCase();
      }
    }
    return newStr === newStr.split("").reverse().join("");
  }
}
