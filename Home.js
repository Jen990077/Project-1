$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }
});

var Home = {};
var empty ={}; 
var highlight={};
var nextCell={}; 
var sameCell={};


Home.WireClickEvent = function () {

    $(".cell").click(function () {
    
    if ()
    {
        $(this)

    else if(){
        $(this)
            }
    else if(){
        $(this)
        
    }
    else()
    {
        $(this)
    }
    });
}



Home.WireDragEvent = function () {
    $(".piece").draggable()
    $(this).css("background-color", "yellow");
}



$(document).ready(function () {
    Home.WireClickEvent();
    Home.WireDragEvent();
    
    });
