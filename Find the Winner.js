//6. Find the Winner

//You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. 
//You need to find out the that which player wins the maximum number of games or there is a draw between them.

//Note: You have to complete Game_Winner function. No need to take any input.

var Game_Winner = (S) => 
{
  let c1 = 0,c2 = 0;
  
  for (let i = 0;i<S.length;i++)
  {
    if(S[i] == "A")
    {
      c1++;
    }
    else
    {
      c2++;
    }
  }
  if(c1>c2)
  {
    return "Aditya";
  }
  else if(c1<c2)
  {
    return "Danish";
  }
  else{
    return "Draw";
  }
}