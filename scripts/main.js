/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function moveAceToEnd(handIn) {
  var noAceHand = [];
  var aceHand = [];
  
  for (let j = 0; j < handIn.length; j++) {
    if (handIn[j] == "A") {
      aceHand.push(handIn[j]);
    } else {
      noAceHand.push(handIn[j]);
    }
  }
  return noAceHand.concat(aceHand);
}

function handValue (hand) {
  var handValue = 0;

  hand = moveAceToEnd(hand);

  for (let i = 0; i < hand.length; i++) {
    switch(hand[i]) {
      case "J":
      case "Q":
      case "K":
        handValue += 10;
        break;
      case "A":
        if (handValue + 11 > 21 ) {
          handValue = handValue += 1;
        } else {
          handValue += 11;
        }
        break;
      default:
        handValue += parseInt(hand[i]);
        break;
    }
  } 
  return handValue;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/