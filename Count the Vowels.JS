//3. You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.
//Note: You have to complete Count_Vowel function. No need to take any input.

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