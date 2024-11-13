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
        gridcell.style.borderWidth = "2px";
        gridcell.style.background = "orange";
        gridcell.style.height = "10px";
        gridcell.style.width = "10px";

        gridcell.classList.add('gridcell')
        gridrow.appendChild(gridcell);
        //create boxes that go inside said div
        }
        container.appendChild(gridrow)
    }
}


console.log(GenerateGrid(50,50))







let isdrawing = false

