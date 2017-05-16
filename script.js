function ResponseY() {
    document.getElementById("demo").innerHTML = "Okay then, have a nice day.";
}
function ResponseN() {
    document.getElementById("demo").innerHTML = "Have you gone swimming recently?(This would be a random JS generated question)";
}

function GetValue()
{
    var myarray= new Array("Have you swam recently?","Did you visit any museums recently?","Is talking to a machine going to help you?");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}

stevee