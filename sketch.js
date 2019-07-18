const box_row = 10;
const box_col = 10;

let box_width, box_height;
let positionX, positionY;

function setup(){
    createCanvas(600,600);
    box_height = height / box_col;
    box_width = width / box_row;


    for(let i = 0; i < box_row ; i++){
        const x = i * box_width;

        for(let j = 0; j < box_col; j++){
        const y = j * box_height;
        rect(x,y,box_width,box_height);
        }
    }
    fill(255,0,0);
}
let board = [
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ]
];
function mouseClicked(){
positionX = mouseX / 60;
positionY = mouseY / 60;
console.log(positionX, " ", positionY);
/*    if(mouseY < 60){
        if(mouseX < 60){
        rect(0,0,60,60);}
        if(mouseX > 60 && mouseX < 120){
        rect(60,0,60,60);}
        if(mouseX > 120 && mouseX < 180){
        rect(120,0,60,60);}
        if(mouseX > 180 && mouseX < 240){
        rect(180,0,60,60);}
        if(mouseX > 240 && mouseX < 300){
        rect(240,0,60,60);}
        if(mouseX > 300 && mouseX < 360){
        rect(300,0,60,60);}
        if(mouseX > 360 && mouseX < 420){
        rect(360,0,60,60);}
        if(mouseX > 420 && mouseX < 480){
        rect(420,0,60,60);}
        if(mouseX > 480 && mouseX < 540){
        rect(480,0,60,60);}
        if(mouseX > 540 && mouseX < 600){
        rect(540,0,60,60);}
    }
    if(mouseY > 60 && mouseY < 120){
        if(mouseX < 60){
        rect(0,0,60,60);}
        if(mouseX > 60 && mouseX < 120){
        rect(60,0,60,60);}
        if(mouseX > 120 && mouseX < 180){
        rect(120,0,60,60);}
        if(mouseX > 180 && mouseX < 240){
        rect(180,0,60,60);}
        if(mouseX > 240 && mouseX < 300){
        rect(240,0,60,60);}
        if(mouseX > 300 && mouseX < 360){
        rect(300,0,60,60);}
        if(mouseX > 360 && mouseX < 420){
        rect(360,0,60,60);}
        if(mouseX > 420 && mouseX < 480){
        rect(420,0,60,60);}
        if(mouseX > 480 && mouseX < 540){
        rect(480,0,60,60);}
        if(mouseX > 540 && mouseX < 600){
        rect(540,0,60,60);}
    }
     */
}