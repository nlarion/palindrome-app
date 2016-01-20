var stripText = function(message){return message.toLowerCase().replace(/ /g,'').replace(/[^\w\s]/gi, '');};
function palindrome(string){
  string = stripText(string);
  var splitInt = string.length/2;
  if(string.length % 2 === 0){
    var lastPart = string.slice(splitInt);
  }else{
    splitInt = Math.floor(splitInt);
    var lastPart = string.slice(splitInt+1);
  }
    lastPart = lastPart.split("").reverse().join('');
    var firstPart = string.slice(0,splitInt);
    console.log("first part: "+ firstPart +" lastPart: " +lastPart)
    if(lastPart==firstPart){
      return true;
    } else {
      return false;
    }
}

$(document).ready(function(){
  $("button").click(function(){

    var foo = palindrome($("#palindrome-test").val());
    $("p").text(foo);

  });
});
