
function oddEven(string){
  if(string.length % 2 === 0){
    return true;
  } else {
    return false;
  }
}

var stripText = function(message){
  message = message.toLowerCase();
  message = message.replace(/ /g,'');
  message = message.replace(/[^\w\s]/gi, '');
  return message;
};

function palindrome(string){
  string = stripText(string);
  if(oddEven(string)){
    var splitInt = string.length/2;
    var lastPart = string.slice(splitInt);
    lastPart = lastPart.split("");
    lastPart = lastPart.reverse();
    lastPart = lastPart.join('');
    var firstPart = string.slice(0,splitInt);
    console.log("first part: "+ firstPart +" lastPart: " +lastPart)
    if(lastPart==firstPart){
      return true;
    } else {
      return false;
    }
  }else{
    console.log("else statement");
    var splitInt = string.length/2;
    // console.log(splitInt);
    splitInt = Math.floor(splitInt);
    console.log(splitInt);
    var lastPart = string.slice(splitInt+1);
    lastPart = lastPart.split("");
    lastPart = lastPart.reverse();
    lastPart = lastPart.join('');
    var firstPart = string.slice(0,splitInt);
    console.log("first part: "+ firstPart +" lastPart: " +lastPart)
    if(lastPart==firstPart){
      console.log("true");
      return true;
    } else {
      return false;
    }
  }
}
