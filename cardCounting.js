// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. 
// When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment 
// or decrement the global count variable according to the card's value (see table). The function will then return a string with 
// the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and 
// the player's decision (Bet or Hold) should be separated by a single space.

// Example Output
// -3 Hold
// 5 Bet

var count = 0;

function cc(card) {
  // Only change code below this line
  // changes the value of count based on card value
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count --;
      break;
  }
  // produces output based on the value of count
  if (count > 0) {
    return count + " Bet";
  }
  else {
    return count + " Hold";
  }

  
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
// used to test
cc(2); cc(3); cc(7); cc('K'); cc('A');
