Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

var dat = new Date();

alert(dat.addDays(0))

  

document.getElementById("States").onmouseover = function() {mouseOver()};
document.getElementById("States").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("States").style.color = "pink";
}

function mouseOut() {
    document.getElementById("States").style.color = "black";
}
	

document.getElementById('myClass').onclick = function () { alert ( "In Texas" )};




