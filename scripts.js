/*
Loop to create divs;
i = 0; loop while i <= divAmount; add a div on each loop;
create element("div");
append grid divs to container div;
*/
let divAmount = prompt("How many squares?");
for(i = 0; i <= divAmount; i++) {
   let grid = document.createElement("div");
    container.appendChild(grid);
    grid.setAttribute('id', "grid");
}