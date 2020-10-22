// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
    let week = ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'];
    if (num < 1 || num > 7) {
      return null;
    } else {
      return week[num-1];
    }
  }
  
  returnDay(5);