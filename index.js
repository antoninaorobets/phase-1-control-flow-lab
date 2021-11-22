let reply;

function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
   reply = "This one is on me!";
    }
        else if ((ride > 2000) && (ride < 2500)) {
          reply = 'I will gladly take your thirty bucks.'
        }
            else if (ride > 2500) {
              reply ='No can do.'
            }
return reply;
  } 

let replyCity;

function ternaryCheckCity(city){
  // Write your code here!
  // if (city === 'NYC') {
  //   replyCity ="Ok, sounds good.";
  // }
  //else replyCity = "No go.";
   switch (city) {
     case 'NYC': 
          replyCity ="Ok, sounds good."
          break;
     default: replyCity = "No go."
   }
  return replyCity;
}

let anser;

function switchOnCharmFromTip(rep){
  // Write your code here!
  switch (rep) {
    case 'generous': 
      anser = "Thank you so much.";
      break;
    case 'not as generous': 
      anser = "Thank you.";
      break;
    default: anser = "Bye.";

  }
 return anser;
 }