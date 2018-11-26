/*FILE: http://weblab.cs.uml.edu/~lreynold
91.61 GUI Programming I
Assignment 7: Creating an Interactive Dynamic Table
Liam Reynolds, University of MA, Lowell. CS.
liam_reynolds@student.uml.edu
Copyright(c) 25 November 2018. All rights reserved.*/

function getValues() {
  //input from table is stored as upper and lower bounds of axis
  var lowY = parseInt(document.getElementById("loY").value);
  var upY = parseInt(document.getElementById("upY").value);
  var lowX = parseInt(document.getElementById("loX").value);
  var upX = parseInt(document.getElementById("upX").value);
  //window error message if bounds are in wrong order
  if(lowY > upY || lowX > upX){
    window.alert("Upper bound must be greater than lower bound.");
    exit(1);
  }
  //arrays for storing range of integers between two bounds
  var arrY = [];
  var arrX = [];
  var Ysize = upY - lowY + 1;
  var Xsize = upX - lowX + 1;

  if(Xsize > 19 || Ysize > 19){
    window.alert("Range of bounds is too large to be displayed properly.");
    exit(1);
  }

  var node, prod, newRow, rowEl;
  var tab = document.getElementById("multTable");

  newRow = tab.insertRow(0);
  rowEl = newRow.insertCell(0);
  rowEl.innerHTML = " ";
  //loop assigns values to array by incrementing lower bound by one
  for(var i = 0; i < Ysize; i++){
      arrY[i] = lowY;
      lowY = lowY + 1;
  }
  //insert first row of Y axis range integers into table while creating array
  for(var j = 0; j < Xsize; j++){
      arrX[j] = lowX;
      rowEl = newRow.insertCell(j + 1);
      rowEl.innerHTML = lowX.toString();
      lowX = lowX + 1;
  }
  //insert new row for every element in arrY
  for(i = 0; i < arrY.length; i++){
      newRow = tab.insertRow(i + 1);
      rowEl = newRow.insertCell(0);
      rowEl.innerHTML = arrY[i].toString();
      //insert new cell containing the product of current X and Y value
    for(j = 0; j < arrX.length; j++){
        prod = (arrY[i] * arrX[j]).toString();
        rowEl = newRow.insertCell(j + 1);
        rowEl.innerHTML = prod;
    }
  }
}
//function for resetting table to be called when submit button is pressed
function eraseTable(){
  document.getElementById("multTable").textContent = "";
}
