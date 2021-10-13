let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row(rows are tr tag and go down)
function addR() {
    //declare relevant variables for function(doesn't work if declared outside of function)
    let table = document.getElementById("grid")
    let col = document.createElement("td")
    let row = document.createElement("tr")
    
    //if there's no cols, append 1 tr with 1 td child(one box)
    if(numCols === 0){
        row.appendChild(document.createElement("td"))  
        table.appendChild(row)

        //if there are no rows or cols, adding one box will create a 1x1 grid, so update cols
        if(numRows === 0)
            numCols++
    }
    
    //if there are cols, append 1 td to the new row for each col
    else{
        for(let i = 0; i < numCols; i++)
            row.appendChild(document.createElement("td"))
            
        table.appendChild(row) 
    }

    numRows++
    console.log("row, col: ", numRows, numCols)
}
//Add a column(columns are td tag and go right)
function addC() {
    //declare relevant variables for function(doesn't work if declared outside of function)
    let table = document.getElementById("grid")
    let col = document.createElement("td")
    let row = document.createElement("tr")
    existingRows = document.querySelectorAll('tr')

    //if there are no rows, append 1 tr with 1 td child(one box)
    if(numRows === 0){
        row.appendChild(document.createElement("td"))  
        table.appendChild(row)

        //if there are no rows or cols, adding one box will create a 1x1 grid, so update row
        if(numCols === 0)
        numRows++
    }
    else{
        for(let i = 0; i < numRows; i++)
            existingRows[i].appendChild(document.createElement("td"))
    }
    
    numCols++
    console.log("row, col: ", numRows, numCols)
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}

//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}


function fill(){
    //alert("Clicked Fill All")
    let box = document.querySelectorAll("td"); // select all the boxes in the grid
    box.forEach(td => { // for each box, change the background color to the selected color
        console.log(td.style.backgroundColor = colorSelected);
    });
}

function clearAll(){
    //alert("Clicked Clear All")
    let box = document.querySelectorAll("td"); // select all the boxes in the grid
    box.forEach(td => { // for each box in the grid
        console.log(td.remove()); // remove the box 
    });
}

function fillU(){
    //alert("Clicked Fill All Uncolored")
    let box = document.querySelectorAll("td"); // select all the boxes in the grid
    box.forEach(td => { // for each box, if the background color is not white or default
        if (td.style.backgroundColor == "white" || td.style.backgroundColor == "") {
            console.log(td.style.backgroundColor = colorSelected); // change color to the selected color
        }
        console.log(td); // else return box with its already colored background
    });
}