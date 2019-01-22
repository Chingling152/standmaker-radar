function Position(x,y) {
    this.x = x;
    this.y = y;
}
//ranks
var Ranks  = ["?","E","D","C","B","A"];

//texts
var PowerText = new Position(197,75);
var SpeedText = new Position(308,136);
var RangeText = new Position(308,280);
var DurabilityText = new Position(197,343);
var PrecisionText = new Position(80,280);
var PotentialText = new Position(80,136);

//skills
var PowerPos = [
    new Position(199,200),//?
    new Position(199,183),//E
    new Position(199,165),//D
    new Position(199,146),//C
    new Position(199,128),//B
    new Position(199,109)//A
];
var SpeedPos = [
    new Position(199,200),//?
    new Position(215,193),//E
    new Position(230,184),//D
    new Position(246,175),//C
    new Position(262,165),//B
    new Position(278,156)//A
];
var RangePos = [
    new Position(199,200),//?
    new Position(215,211),//E
    new Position(231,221),//D
    new Position(247,230),//C
    new Position(263,239),//B
    new Position(278,249)//A
];

var DurabilityPos =[
    new Position(199,202),//?
    new Position(199,221),//E
    new Position(199,238),//D
    new Position(199,257),//C
    new Position(199,276),//B
    new Position(199,294)//A
];

var PrecisionPos =[
    new Position(198,202),//NONE
    new Position(182,211),//E
    new Position(168,220),//D
    new Position(150,230),//C
    new Position(134,239),//B
    new Position(121,247)//A
];

var PotentialPos =[
    new Position(199,200),//?
    new Position(182,193),//E
    new Position(168,184),//D
    new Position(150,175),//C
    new Position(134,165),//B
    new Position(121,156)//A
];

// Objects
var c = document.getElementById("canvasStand");
var ctx = c.getContext("2d");

function SetValues(){
    var Pow = document.getElementById("power").value;
    var Spe = document.getElementById("speed").value;
    var Ran = document.getElementById("range").value;
    var Dur = document.getElementById("durability").value;
    var Pre = document.getElementById("precision").value;
    var Pot = document.getElementById("potential").value;

    ctx.clearRect(0, 0, c.width, c.height);
    DrawBackground();
    DrawStats(Pow,Spe,Ran,Dur,Pre,Pot);

}

function DrawStats(Pow,Spe,Ran,Dur,Pre,Pot){
    ctx.fillStyle = "rgb(250,0,0,0.5)";

    ctx.beginPath();
    ctx.moveTo(PowerPos[Pow].x,PowerPos[Pow].y);
    ctx.lineTo(SpeedPos[Spe].x,SpeedPos[Spe].y);
    ctx.lineTo(RangePos[Ran].x,RangePos[Ran].y);
    ctx.lineTo(DurabilityPos[Dur].x,DurabilityPos[Dur].y);
    ctx.lineTo(PrecisionPos[Pre].x,PrecisionPos[Pre].y);
    ctx.lineTo(PotentialPos[Pot].x,PotentialPos[Pot].y);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = "700 23px Arial";
    ctx.textAlign = "center";
    ctx.fillText(Ranks[Pow],PowerText.x,PowerText.y);
    ctx.fillText(Ranks[Spe],SpeedText.x,SpeedText.y);
    ctx.fillText(Ranks[Ran],RangeText.x,RangeText.y);
    ctx.fillText(Ranks[Dur],DurabilityText.x,DurabilityText.y);
    ctx.fillText(Ranks[Pre],PrecisionText.x,PrecisionText.y);
    ctx.fillText(Ranks[Pot],PotentialText.x,PotentialText.y);

}

function RandomValues() {
    var arr = document.getElementsByClassName("skill");

    Array.from(arr).forEach(element => {
        element.value = parseInt(Math.random()*6);
    });
    
    SetValues();
}

function DrawBackground(){
    var img = document.getElementById("img");
    ctx.drawImage(img,0,0,c.height,c.width);
}


SetValues();