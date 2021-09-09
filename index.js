function scuberGreetingForFeet(someNumber){
  // Write your code here!
  if (someNumber < 400 ) {
    return 'This one is on me!';
  } else if (2000 < someNumber && someNumber < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (2501 <= someNumber) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let destination = (city === 'NYC' ? "Ok, sounds good." : "No go.");

  return destination;
}


function switchOnCharmFromTip(tipAmount){
  // Write your code here!

  let response;

  switch (tipAmount) {
    case 'generous': response = "Thank you so much.";
      break;
    case 'not as generous': response = "Thank you.";
      break;

    default:
      response = "Bye.";
      break;

  }
  return response;
}