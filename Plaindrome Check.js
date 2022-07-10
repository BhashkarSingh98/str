//8. Plaindrome Check
//You are given a string S,Your task is to check wether the given string is a Palindrome or not
//A Palindrome is a string, which turnout same when read in reverse direction.Example: "naman" is a Palindrome.String can contain both upppercase lowercase letters.

//Note: You have to complete Plain_Check function. No need to take any input.

var Palin_Check = (str) =>
{
  let N = str.length;
  for(let i = 0;i<N/2;i++)
  {
    if(str[i] !== str[N-1-i])
    {
      return ("False");
    }
  }
  return("True");
};