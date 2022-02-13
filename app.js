console.log('I am in a separate file');
document.getElementById('case-plus').addEventListener("click", function() {
    const caseNumber = document.getElementById('case-number');
    const caseNumberText = caseNumber.value;
    caseNumber.value = parseInt(caseNumberText) + 1;
    console.log(caseNumberText);
});