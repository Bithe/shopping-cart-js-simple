console.log('I am in a separate file');

function getProductNumber(product, price, isIncreasing) {
    const productNumber = document.getElementById(product + '-number');
    let productNumberText = productNumber.value;

    if (isIncreasing == true) {
        productNumberText = parseInt(productNumberText) + 1;
        console.log(productNumberText);
    } else if (productNumberText > 0) {
        productNumberText = parseInt(productNumberText) - 1;
    }
    productNumber.value = productNumberText;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumberText * price;

    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
//FOr Subtotal, Tax
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    console.log(subTotal);
    //Update on the html
    document.getElementById('subtotal').innerText = subTotal;

    //Tax
    const tax = subTotal / 10;
    document.getElementById('tax').innerText = tax;

    //Total
    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}

//For Phone Events
document.getElementById('phone-plus').addEventListener("click", function() {
    getProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener("click", function() {
    getProductNumber('phone', 1219, false);
});

//For Case Events
document.getElementById('case-plus').addEventListener("click", function() {
    getProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener("click", function() {
    getProductNumber('case', 59, false);
});