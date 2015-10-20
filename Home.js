
function MouseOverListItem(li)
{
	li.className = "list-item-highlight";
}

function MouseOutListItem(li)
{
	li.className = "";
}

Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

var dat = new Date();

alert(dat.addDays(0))


function showAlert() {
  alert("In Texas!")
}
