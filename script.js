let isDrawing = false

const input = document.querySelector('#input');
const reset = document.querySelector('#reset');


reset.addEventListener('click', () =>{
const gridsize = parseInt(input.value);
input.value =" ";
if (gridsize <= 0 || gridsize > 100){
    alert(gridsize + " is an invalid number (try 1-100)")
    return;
}
else{
GenerateGrid(gridsize, gridsize);
}
})

function GenerateGrid(x, y) {
    const container = document.querySelector("#container");
    container.innerHTML = ""; // Clear previous grid

    for (let i = 0; i < y; i++) {
        const gridrow = document.createElement('div');
        gridrow.classList.add('gridrow'); // Apply CSS class

        for (let o = 0; o < x; o++) {
            const gridcell = document.createElement('div');
            gridcell.classList.add('gridcell'); // Apply CSS class to cell

            gridcell.addEventListener('mousedown', () => {
                isDrawing = true;
                toggleDrawing(gridcell);
            });
            gridcell.addEventListener('mouseover', () => {
                if (isDrawing) {
                    toggleDrawing(gridcell);
                }
            });

            gridrow.appendChild(gridcell);
        }
        container.appendChild(gridrow);
    }
}





function toggleDrawing(gridcell){
    if (gridcell.style.background == "white"){
        gridcell.style.background = "black"
    }
    else{
        gridcell.style.background = "white"
    }
}




// document.addEventListener('mouseup', () => {
//     isDrawing = false;
// });







