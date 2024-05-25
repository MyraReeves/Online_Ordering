function getReceipt() {
    const heading = "<h4>Your Order:</h4>"
    let text;
    let runningTotal = 0;
    let sizeTotal = 0;
    let sizeArray = document.getElementsByClassName("size");
    for (let i = 0; i < sizeArray.length; i++) {
        id (sizeArray[i].checked) {
            let selectedSize = sizeArray[i].ariaValueMax;
            text = heading + "<br>" + selectedSize;
        }
    }
}