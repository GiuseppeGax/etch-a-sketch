let isDrawing = false


function GenerateGrid(x, y){
    const container = document.querySelector("#container");
    for(let i=0; i<y;i++){
        //create a div
        const gridrow = document.createElement('div');
        gridrow.style.display = "flex"
        for(let o=0; o<x; o++){
        const gridcell = document.createElement('div')
        gridcell.style.borderStyle = "solid";
        gridcell.style.borderColor = "black";
        gridcell.style.borderWidth = "1px";
        gridcell.style.background = "white";
        gridcell.style.height = "10px";
        gridcell.style.width = "10px";

        gridcell.addEventListener('mousedown', () => {
            isDrawing = true;
            toggleDrawing();
        });
        gridcell.addEventListener('mousehover', () => {
            if (isDrawing){
                toggleDrawing(); 
            }
        });

        gridcell.addEventListener('mouseup', () => {
            isDrawing = false;
        });


        gridcell.classList.add('gridcell')
        gridrow.appendChild(gridcell);
        //create boxes that go inside said div
        }
        container.appendChild(gridrow)
    }
}




function toggleDrawing(){
    if (gridcell.style.background == "white"){
        gridcell.style.background = "black"
    }
    else{
        gridcell.style.background = "white"
    }
}


console.log(GenerateGrid(50,50))








