// time setup
var datetime = new Date();
document.getElementById("time").textContent= datetime;  //print on html page
// update time
 function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toDateString();
    const formattedString = dateString.replace();
    timeDisplay.textContent=formattedString;
}

setInterval(refreshTime,1000);
// create close buttton and append to list items
var myNodeList = document.getElementsByTagName("LI");
var i;
for(i = 0; i < myNodeList.length; i++) {
    var span= document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className= "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
// hide item when close button is clicked
var close=document.getElementsByClassName('close');
var i;
for(i=0; i<close.length; i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display = 'none';
    }
}
// add checked symbol
var list =document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }
},false);
// create new list with add button
function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('input').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue ===''){
        alert('Cannot be empty!');
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('input').value='';
    
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0; i < close.length; i++){
        close[i].onclick= function()
        {
            var div = this.parentElement;
            div.style.display ="none";
        }
    }
}