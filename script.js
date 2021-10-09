let numRows = 0;
let numCols = 0;
let colorSelected;



//Add a row(rows are tr tag)
function addR() {
    let table = document.getElementById("grid")
    let col = document.createElement("td")
    let row = document.createElement("tr")
    
    //if there's no cols, append 1 tr with 1 td child(one box)
    if(numCols === 0){
        console.log("no cols")
        row.appendChild(document.createElement("td"))  
        table.appendChild(row)
        console.log(row.childNodes)

        if(numRows === 0)//if there are no rows or cols, adding one box will create a 1x1 grid, so updare cols
            numCols++
    }
    
    //if there are cols, append 1 td to the new row for each col
    else{
        console.log(numCols, " cols")
        for(let i = 0; i < numCols; i++)
            row.appendChild(document.createElement("td"))
            
        table.appendChild(row) 
    }

    numRows++
    //console.log(numRows)
}
//Add a column(columns are td tag)
function addC() {
    let table = document.getElementById("grid")
    let col = document.createElement("td")
    let row = document.createElement("tr")
    
    if(numRows === 0){
        console.log("no cols")
        row.appendChild(document.createElement("td"))  
        table.appendChild(row)
        console.log(row.childNodes)
        
        if(numCols === 0)//if there are no rows or cols, adding one box will create a 1x1 grid, so update row
        numRows++
    }
    
    numCols++
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
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}