/*
NEWGRID:
when called, remove exisiting grid;
prompt for square root of grid area;
if player enters number > 100, ask again;
create div element on each iteration and append to container;
give each div a unique id;
give all divs a class of grid;
set #container grid columns and rows to gridRoot;
*/
document.getElementById('newGridBtn').addEventListener('click', newGrid);
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function newGrid() {
removeAllChildNodes(container);
let gridRoot = prompt("Square root of grid?", "16, 32, 48, 100");
divQuantity = Math.pow(gridRoot, 2);
for(i = 0; i < divQuantity; i++) {
    if (gridRoot > 100) {
        newGrid();
    } else {
   let grid = document.createElement("div");
    container.appendChild(grid);
    grid.setAttribute('id', i);
    grid.setAttribute('class', 'grid');
    document.getElementById('container').style.setProperty('grid-template-rows', 'repeat('+gridRoot+ ', 1fr');
    document.getElementById('container').style.gridTemplateColumns = `repeat( ${gridRoot}, 1fr)`
}
}
}
