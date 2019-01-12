function Position(x,y) {
    this.x = x;
    this.y = y;
}
//ranks
var Ranks  = ["?","E","D","C","B","A"];

//texts
var PowerText = new Position(150,145);
var SpeedText = new Position(240,200);
var RangeText = new Position(240,300);
var DurabilityText = new Position(150,355);
var PrecisionText = new Position(60,300);
var PotentialText = new Position(60,200);

//skills
var PowerPos = [
    new Position(158,241),//?
    new Position(158,227),//E
    new Position(158,212),//D
    new Position(158,197),//C
    new Position(158,181),//B
    new Position(158,167)//A
];
var SpeedPos = [
    new Position(158,241),//?
    new Position(172,234),//E
    new Position(184,226),//D
    new Position(197,220),//C
    new Position(210,212),//B
    new Position(223,204)//A
];
var RangePos = [
    new Position(158,241),//?
    new Position(172,250),//E
    new Position(184,257),//D
    new Position(197,265),//C
    new Position(211,272),//B
    new Position(223,279)//A
];

var DurabilityPos =[
    new Position(158,241),//?
    new Position(158,257),//E
    new Position(158,271),//D
    new Position(158,287),//C
    new Position(158,302),//B
    new Position(158,316)//A
];

var PrecisionPos =[
    new Position(157,240),//NONE
    new Position(146,250),//E
    new Position(133,255),//D
    new Position(120,265),//C
    new Position(107,272),//B
    new Position(95,279)//A
];

var PotentialPos =[
    new Position(158,240),//?
    new Position(146,234),//E
    new Position(133,226),//D
    new Position(120,220),//C
    new Position(107,212),//B
    new Position(95,204)//A
];

// Objects
var svg = document.getElementById("svgStand");
var path = document.createElementNS("http://www.w3.org/2000/svg","path");

var RankText = new Array(6);

for (let index = 0; index < 6; index++) {
    RankText[index] = document.createElementNS("http://www.w3.org/2000/svg","text");
    RankText[index].setAttributeNS(null,"class","rank-text");
    svg.appendChild(RankText[index]);
}

SetValues();

function SetValues(){
    var Pow = document.getElementById("power").value;
    var Spe = document.getElementById("speed").value;
    var Ran = document.getElementById("range").value;
    var Dur = document.getElementById("durability").value;
    var Pre = document.getElementById("precision").value;
    var Pot = document.getElementById("potential").value;

    var result = "M" + PowerPos[Pow].x + " " + PowerPos[Pow].y + " L" + SpeedPos[Spe].x + " " + SpeedPos[Spe].y + " L" + RangePos[Ran].x + " " + RangePos[Ran].y + " L" + DurabilityPos[Dur].x + " " + DurabilityPos[Dur].y + " L" + PrecisionPos[Pre].x + " " + PrecisionPos[Pre].y + " L" + PotentialPos[Pot].x + " " + PotentialPos[Pot].y + "Z";
    Draw(result);

    RankText[0].innerHTML = Ranks[Pow];RankText[0].setAttributeNS(null,"x",PowerText.x);RankText[0].setAttributeNS(null,"y",PowerText.y);
    RankText[1].innerHTML = Ranks[Spe];RankText[1].setAttributeNS(null,"x",SpeedText.x);RankText[1].setAttributeNS(null,"y",SpeedText.y);
    RankText[2].innerHTML = Ranks[Ran];RankText[2].setAttributeNS(null,"x",RangeText.x);RankText[2].setAttributeNS(null,"y",RangeText.y);
    RankText[3].innerHTML = Ranks[Dur];RankText[3].setAttributeNS(null,"x",DurabilityText.x);RankText[3].setAttributeNS(null,"y",DurabilityText.y);
    RankText[4].innerHTML = Ranks[Pre];RankText[4].setAttributeNS(null,"x",PrecisionText.x);RankText[4].setAttributeNS(null,"y",PrecisionText.y);
    RankText[5].innerHTML = Ranks[Pot];RankText[5].setAttributeNS(null,"x",PotentialText.x);RankText[5].setAttributeNS(null,"y",PotentialText.y);
}

function Draw(values){
    svg.appendChild(path);
    path.setAttributeNS(null,"d",values);
    path.setAttributeNS(null,"fill","rgb(250,0,0,0.5)");
}

function RandomValues() {
    var arr = document.getElementsByClassName("skill");

    Array.from(arr).forEach(element => {
        element.value = parseInt(Math.random()*6);
    });
    
    SetValues();
}