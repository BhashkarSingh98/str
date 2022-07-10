//13. Count the Vowels and Consonants
//You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of consonants in the given string.
//Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.


var Count_Vowels= (S) => 
{
  let vowel_list = 'aeiouAEIOU';
  let count = 0;
  
  for(let i = 0; i < S.length ; i++)
  {
    if (vowel_list.indexOf(S[i]) !== -1)
    {
      count ++;
    }
  }
  return count;
};

var Count_Consonants= (S) => 
{
  let cons_list = 'aeiouAEIOU';
  let count1 = 0;
  
  for(let j = 0; j < S.length ; j++)
  {
    if (cons_list.indexOf(S[j]) == -1)
    {
      count1++;
    }
  }
  return count1;
};