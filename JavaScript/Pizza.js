function getReceipt() {
  // This initializes our string so it can get passed from
  // function to function, growing line by line into a full receipt
  var text1 = "";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  var selectedSize = null; // initialize selectedSize to null

  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1;
    }
  }
  // if no size has been selected, display an error message
  if (selectedSize === null) {
    popUp();
    return;
  }

  // continue with calculations if a size has been selected
  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }
  runningTotal = sizeTotal;

  // All three of these variables will be passed on to to the getTopping function
  getTopping(runningTotal, text1, selectedSize, sizeTotal);
}

function getTopping(runningTotal, text1, selectedSize, sizeTotal) {
  var toppingTotal = 0;
  var selectedTopping = [];
  var toppingArray = document.getElementsByClassName("toppings");
  for (var j = 0; j < toppingArray.length; j++) {
    if (toppingArray[j].checked) {
      selectedTopping.push(toppingArray[j].value);
      text1 = text1 + toppingArray[j].value + " $1.00 " + "<br>";
    }
  }
  var toppingCount = selectedTopping.length;
  if (toppingCount > 1) {
    toppingTotal = toppingCount - 1;
  } else {
    toppingTotal = 0;
  }
  runningTotal = runningTotal + toppingTotal;

  const totals = `
	<br>
	<h1><strong> Your total is $${runningTotal}.00</strong></h1>
	<p> You added ${toppingCount} topping's to your ${selectedSize}. <br> We have a deal active right now where you get one topping for free</p>
	<p> <strong> Here is a break down of what  you ordered: </strong> <br> 
	 ${selectedSize} $${sizeTotal}.00 
	 <br> ${text1}</p>
`;
  document.getElementById("totalPrice").innerHTML = totals;
}
// this reloads the page and clears the check boxes and radios
function reloadWindow() {
  window.location.reload(true);
}

function popUp() {
  document.getElementById("dialog").style.display = "block";
}

function closePopUp() {
  document.getElementById("dialog").style.display = "none";
}

// We are making a variable and giving it the value of element id hide
var closePopEn = document.getElementById("hide");
// Now we add the event listener
closePopEn.addEventListener("keypress", function (event) {
  // Then we check if the user has pressed the enter key. If so we close the dialog box.
  if (event.key == "Enter") {
    document.getElementById("dialog").style.display = "none";
  }
});
