function getReceipt() {
    const heading = "<h4>Your Order:</h4>"
    let text;
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");
    
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text = heading + "<br>" + selectedSize;
        }
    }

    if (selectedSize === 'Personal Pizza') { sizeTotal = 10;}
    else if (selectedSize === 'Small Pizza') {sizeTotal = 12;}
    else if (selectedSize === 'Medium Pizza') {sizeTotal = 14;}
    else if (selectedSize === 'Large Pizza') {sizeTotal = 16;}
    else if (selectedSize === 'Extra Large Pizza') {sizeTotal = 18;}

    runningTotal = sizeTotal;

    console.log("Receipt so far = " + text);
    console.log(selectedSize + " = $"+sizeTotal + ".00");
    console.log("Subtotal: $" + runningTotal + ".00");
    
    getTopping(runningTotal, text);
}
