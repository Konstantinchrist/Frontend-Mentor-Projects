const people = document.getElementById('people-input')
const bill = document.getElementById('bill-input')
const submitButton = document.getElementById('submit-btn')
const tips = document.querySelectorAll('.tip')
const totalPerPerson = document.getElementById('total-per-person')
const tipPerPerson = document.getElementById('tip-per-person')



bill.addEventListener('input', billInputFun);
people.addEventListener('input', peopleInputFun);
tips.forEach(function(val) {
    val.addEventListener('click', handleClick)
})

bill.value = "0.0";
people.value = "1";
tipPerPerson.innerHTML = '$' + (0.0).toFixed(2);
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun(){
    billValue = parseFloat(bill.value)
    console.log(billValue)
}

function peopleInputFun(){
    peopleValue = parseFloat(people.value)
    console.log(peopleValue)
}

function handleClick(event){
    tips.forEach(function (val) {
        if (event.target.innerHTML == val.innerHTML){
            tipValue = parseFloat(val.innerHTML)/100
        }
    })
    console.log(tipValue)
}

function calculateTip(){
    if (peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue * tipAmount) / peopleValue;
        tipPerPerson.innerHTML = '$' + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = '$' + total.toFixed(2);
        console.log('totalPerPerson')
    }
}
