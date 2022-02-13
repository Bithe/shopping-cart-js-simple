console.log('I am in a separate file');

function getCaseNUmber(isIncreasing) {
    const caseNumber = document.getElementById('case-number');
    const caseNumberText = caseNumber.value;
    if (isIncreasing == true) {
        caseNumber.value = parseInt(caseNumberText) + 1;
        console.log(caseNumberText);
    } else if (caseNumberText > 0) {
        caseNumber.value = parseInt(caseNumberText) - 1;
    }
}
document.getElementById('case-plus').addEventListener("click", function() {
    getCaseNUmber(true);
});

document.getElementById('case-minus').addEventListener("click", function() {
    getCaseNUmber(false);
});