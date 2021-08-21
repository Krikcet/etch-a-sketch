/*
Loop to create divs;
i = 0; loop while i <= divQuantity; add a div on each loop;
create element("div");
;
append grid divs to container div;

*/

let gridRoot = prompt("How many squares?", "256, 1024, 4096, 10000");
divQuantity = Math.pow(gridRoot, 2);
for(i = 0; i < divQuantity; i++) {
   let grid = document.createElement("div");
    container.appendChild(grid);
    grid.setAttribute('id', "grid");
}