var items = [ ];
var userLowerCase;




function buyStuff(){
  if (document.getElementsByTagName("li").length < 7) {
    var newlist = document.createElement('li');
    var x = document.createTextNode(document.getElementById('buy').value);
    newlist.appendChild(x);
    var position = document.getElementsByTagName('ol')[0];
    position.appendChild(newlist);
    document.getElementById('buy').value = " ";
    document.getElementById('full').innerHTML = "LIST ISN'T FULL";
    
}
  else if (document.getElementsByTagName("li").length == 7) {
    document.getElementById('full').innerHTML = "LIST IS FULL"
  }
}

function removenum() {
  var remove = document.getElementById('rem').value;
  var change = parseInt(remove);
  var child = document.getElementsByTagName('li')[change - 1];
  var parent = child.parentNode;
  parent.removeChild(child);
  document.getElementById('full').innerHTML = "LIST ISN'T FULL";
}
