/* 
1. add event listener to the case plus button
2. get the value inside the case number field (input field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case number field
*/
function updateCaseNumber(incrise) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const prevoiusCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber
    if (incrise === true) {
        newCaseNumber = prevoiusCaseNumber + 1;
    }
    else {
        newCaseNumber = prevoiusCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 69;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})