
function getReceipt() {
    const heading = "<h4>Your Order:</h4>"
    let text;
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");
    
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text = "<br> <hr>" + heading + "<br>" + selectedSize + " with: <br>";
        }
    }

    if (selectedSize === 'Personal Pizza') { sizeTotal = 10;}
    else if (selectedSize === 'Small pizza') {sizeTotal = 12;}
    else if (selectedSize === 'Medium pizza') {sizeTotal = 14;}
    else if (selectedSize === 'Large pizza') {sizeTotal = 16;}
    else if (selectedSize === 'Extra Large pizza') {sizeTotal = 18;}

    runningTotal = sizeTotal;

    console.log("Receipt so far = " + text);
    console.log(selectedSize + " = $"+sizeTotal + ".00");
    console.log("Subtotal: $" + runningTotal + ".00");
    
    getToppings(runningTotal, text);
}



function getToppings(runningTotal, text) {
    let toppingTotal = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName('toppings');
    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedTopping.push(toppingArray[i].value);
            console.log("Selected topping: " + toppingArray[i].value);
            text = text + toppingArray[i].value + "<br>"
        }
    }
    let toppingCount = selectedTopping.length;

    // First topping is "free"
    if (toppingCount > 1) { toppingTotal = (toppingCount - 1); }
    else {toppingTotal = 0;}

    runningTotal = (runningTotal + toppingTotal);
    console.log("Total number of toppings = " + toppingCount);
    console.log(toppingCount + ' additional toppings minus 1 "free" topping = ' + '$' + toppingTotal + '.00');
    console.log("Choices made:" + text);
    console.log("Subtotal: " + "$" + runningTotal + ".00");

    document.getElementById("showText").innerHTML = text;
    document.getElementById("totalPrice").innerHTML = "<h4>Total due: <strong>$" + runningTotal + ".00" + "</strong></h4>";
};