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
["0", "s", "0", "0", "0", "0", "s", "s", "s", "0", ],
["0", "s", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "s", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "s", "s", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "s", "s", "s", "s", "s", "0", ],
["s", "s", "s", "s", "0", "0", "0", "0", "0", "0", ],
["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", ]
];
function mouseClicked(){
positionX = Math.floor(mouseX / (width / box_row));
positionY = Math.floor(mouseY / (height / box_col));
console.log(positionX, " ", positionY);
if(board[positionY][positionX] == "s"){
fill(0,255,0);
rect(positionX * 60,positionY * 60, box_width, box_height);
fill(255,0,0);
}
else{
    rect(positionX * 60,positionY * 60, box_width, box_height);
}
}