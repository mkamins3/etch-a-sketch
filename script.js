
window.addEventListener("load", loadGrid(16));

const gridContainer = document.querySelector("#container");
const reset = document.querySelector("#resetButton");

// reset button
reset.addEventListener("click", clear);

function clear() {
    gridContainer.innerHTML = "";
    var size = prompt("How many squares per side?");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, ${size}fr)`;
    loadGrid(size);
};

//change color when hovering
function changeColor(e) {
    e.target.style.backgroundColor = "black";
    
};
function loadGrid(size) {
    for (var i = 0; i < (size * size); i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList = "grid";
        document.querySelector("#container").appendChild(gridDiv);
        gridDiv.addEventListener("mouseover", changeColor);
        
    }
};

