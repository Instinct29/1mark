var readlinesync = require('readline-sync');
var qn = readlinesync.question("what is your name?: ");
var score = 0;
console.log('Welcome  '+qn+'  to DO YOU KNOW Manthan?');
function qna(question,answer){
  var userans = readlinesync.question(question);
  if(userans===answer){
  console.log('right!')
  score+=1;
  }
  else{
     console.log("Wrong!")
     score-=1;
  }
  console.log("current score: ",score);
  console.log('-----------------------')

}
var qn1 = {
  question : "where do i live?",
  answer : 'jaipur'
}
var qn2 = {
  question : "What do i wanna be?",
  answer : 'Full stack dev'
}
var qn3 = {
  question : "Who's my favourite superhero?",
  answer : 'Spiderman'
}
var arr = [qn1,qn2,qn3];
for(var i =0;i<=arr.length;i++)
{
    qna(arr[i].question,arr[i].ans);
  
}