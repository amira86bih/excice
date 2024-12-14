//EXERCICE 1//
function findPairs(nums, target) {
    const RESULTAT= [];
    
    
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
       
        if (nums[i] + nums[j] === target) {
            console.log([i, j]);
        }
      }
    }
    
    return RESULTAT;
  }
  
 
  console.log(findPairs([2, 7, 11, 15], 9)); 
  console.log(findPairs([1, 2, 3, 4, 5], 6)); 

  //EXERCICE 2 Vérification de plindromes 
 function isPalindrome(str) {
  
  let reverserStr = str.split('').reverse().join('');
  
  return str === reverserStr;
}

console.log(isPalindrome("radar")); 
console.log(isPalindrome("javascript")); 

  //EXERCICE 3  Recherche du duxième plus grand élément
function secondLargest(nums) {
  
  if (nums.length < 2) {
      return null; 
  }

  let sorteNums = nums.sort((a, b) => b - a);
  return sorteNums[1];
}

console.log(secondLargest([10, 20, 30, 40])); 
console.log(secondLargest([5, 1, 9, 2])); 
//EXERCICE 4 CALCUL DES  FREQUENCES :
function charFrequency(str) {
  let frequency = {}; 
  for (let char of str) {
      if (frequency[char]) {
          frequency[char]++;
      } else {
          frequency[char] = 1;
      }
  }

  return frequency;
}

console.log(charFrequency("hello"));
console.log(charFrequency("javascript"));
//EXERCICE 5 CALCUL DES  FREQUENCES :
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(["a", "b", "a", "c", "c"]));

//EXERCICE 6  :
function sortWordsByLength(sentence) {
  return sentence.split(' ').sort((a, b) => a.length - b.length);
}

console.log(sortWordsByLength("Javascript is fun"));

console.log(sortWordsByLength("I love programming"));

//EXERCICE 7 :
function countUniqueWords(sentence) {
  
  const words = sentence.toLowerCase().split(/\s+/); 
  const uniqueWords = new Set(words);
  return uniqueWords.size;
}

console.log(countUniqueWords("hello world hello")); 
console.log(countUniqueWords("I love coding and I love learning")); 


//EXERCICE 8  :
function multiplicationTable(num) {
   return Array.from({ length: 10 }, (_, i) => num * (i + 1));
}

console.log(multiplicationTable(3)); 
console.log(multiplicationTable(5)); 
