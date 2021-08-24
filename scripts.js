/*
NEWGRID:
when called, remove exisiting grid;
prompt for square root of grid area;
if player enters number > 100, ask again;
create div element on each iteration and append to container;
give each div a unique id;
give all divs a class of grid;
set #container grid columns and rows to gridRoot;

SKETCH EFFECT:
add eventListener to each div;
on mouseover, change background-color;

RANDOM COLOR:
make a loop that assigns a random rgb value to randomColor;
    loop picks random number between 1-16777215 and creates a string after #;

FADE TO BLACK:
lower opacity with each mouseover;
start with 1 opacity;
make each grid square have background color = white;
make container have background of black;

TO DO:
MAKE BUTTONS THAT ACTIVATE COLOR, BLACK, FADE TO BLACK;
MAKE BUTTONS THAT SET PREDETERMINED GRID SIZE;
*/
document.getElementById('newGridBtn').addEventListener('click', newGrid);
document.getElementById('gitBtn').addEventListener('click', () => window.location = 'https://github.com/Krikcet/etch-a-sketch')

function fadeBlack () {
this.style.opacity -= .1
}







function changeColor() {
    for (i=0; i < 1; i++){
randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
this.style.backgroundColor =  randomColor;
    }
}




function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function newGrid() {
removeAllChildNodes(container);
let gridRoot = prompt("Square root of grid?", '1-80');
divQuantity = Math.pow(gridRoot, 2);
for(i = 0; i < divQuantity; i++) {
    if (gridRoot > 80) {
        newGrid();
    } else {
    grid = document.createElement("div");
    container.appendChild(grid);
    grid.setAttribute('id', i);
    grid.setAttribute('class', 'grid');
    document.getElementById('container').style.setProperty('grid-template-rows', 'repeat('+gridRoot+ ', 1fr');//one method
    document.getElementById('container').style.gridTemplateColumns = `repeat( ${gridRoot}, 1fr)`; //second method
    gridNum = document.getElementById(i);
    gridNum.addEventListener('mouseover', changeColor);
    gridNum.addEventListener('mouseover', fadeBlack);
    gridNum.style.opacity = 1;
    container.style.backgroundColor = 'black';
        }
    }
}
