

function convert() {
    let inputAmount = document.getElementById("Amount");
    let selectFrom = document.getElementById("From");
    let selectTO = document.getElementById("To")

    let convert = inputAmount.value * selectFrom.value / selectTO.value;
    document.getElementById("result").innerHTML=convert;
}