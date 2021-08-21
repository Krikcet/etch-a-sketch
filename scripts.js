/*
Loop to create divs;
i = 0; loop while i <= divQuantity; add a div on each loop;
create element("div");
;
append grid divs to container div;

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
    grid.setAttribute('class', "grid",);
    }
}
}