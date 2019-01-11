var Class  = ["None","E","D","C","B","A"];

var PowerText = [0,0];
var PowerX = [158,158,158,158,158,158]; 
var PowerY = [241,227,212,197,181,167];

var SpeedText = [0,0];
var SpeedX = [158,172,184,197,210,223];
var SpeedY = [241,234,226,220,212,204];

var RangeX = [158,172,184,197,211,223];
var RangeY = [241,250,257,265,272,279];

var DurabilityX = [158,158,158,158,158,158];
var DurabilityY = [241,257,271,287,302,316];

var PrecisionX = [157,146,133,120,107,95];
var PrecisionY = [240,250,255,265,272,279];

var PotentialX = [158,146,133,120,107,95];
var PotentialY = [240,234,226,220,212,204];

var svg = document.getElementById("svgStand");
var path = document.createElementNS("http://www.w3.org/2000/svg","path");

function GetValues(){
    var Pow = document.getElementById("power").value;
    var Spe = document.getElementById("speed").value;
    var Ran = document.getElementById("range").value;
    var Dur = document.getElementById("durability").value;
    var Pre = document.getElementById("precision").value;
    var Pot = document.getElementById("potential").value;

    var result = "M" + PowerX[Pow] + " " + PowerY[Pow] + " L" + SpeedX[Spe] + " " + SpeedY[Spe] + " L" + RangeX[Ran] + " " + RangeY[Ran] + " L" + DurabilityX[Dur] + " " + DurabilityY[Dur] + " L" + PrecisionX[Pre] + " " + PrecisionY[Pre] + " L" + PotentialX[Pot] + " " + PotentialY[Pot] + "Z";
    Draw(result,null);
    DrawRank(Pow,Spe,Ran,Dur,Pre,Pot);
}

function Draw(values,text){
    svg.appendChild(path);
    path.setAttributeNS(null,"d",values);
    path.setAttributeNS(null,"fill","rgb(250,0,0,0.5)");
}

function DrawRank(pow,spe,ran,dur,pre,pot) {
    
}

GetValues();