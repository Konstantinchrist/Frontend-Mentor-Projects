const people = document.getElementById('people-input');
const bill = document.getElementById('bill-input');
const resetButton = document.getElementById('reset-btn');
const totalPerPerson = document.getElementById('total-per-person');
const tipPerPerson = document.getElementById('tip-per-person');
const error = document.getElementById('error');

const _5 = document.getElementById('five');
const _10 = document.getElementById('ten');
const _15 = document.getElementById('fifteen');
const _20 = document.getElementById('twenty');
const _50 = document.getElementById('fifty');
const customTip = document.getElementById('custom-tip'); 
const tips = Array.from(document.querySelectorAll('.tip'));

bill.value='0.00';
people.value='1';

let billValue = 0;
let peopleValue = 1;
let tipValue = 0;

bill.addEventListener('input', reloadAll);
people.addEventListener('input', reloadAll);

function hide(element){
    element.style.display = 'none';
}
function show(element){
    element.style.display = 'block';
}

// calculate tip
function calculateTip(element){
    tipValue = parseFloat(element.innerHTML) / 100;
    tips.forEach(resetTipStyles); element.style.backgroundColor = 'hsl(172, 56%, 34%)';
    reloadAll();
}

function resetTipStyles(element){
    element.style.backgroundColor = 'hsl(183, 100%, 15%)';
}

function reloadAll(){
    if (parseFloat(people.value) > 0){
        if (bill.value == ''){
            billValue = 0.00;
            bill.value='0.00';
        }
        else{
            error.style.display='none';
            let billValue = parseFloat(bill.value);
            let peopleValue = parseFloat(people.value);
            let tipAmountperPerson = ((billValue / peopleValue * tipValue));
            let totalPerPersonWithTip = ((billValue / peopleValue) + tipAmountperPerson);
            tipPerPerson.innerHTML=('$' + (tipAmountperPerson.toFixed(2)));
            totalPerPerson.innerHTML=('$' + (totalPerPersonWithTip.toFixed(2)));
        }
        hide(error);
        people.style.borderColor='hsl(185, 41%, 84%)';
    }
    else{
        show(error);
        people.style.borderColor='red';
        tipPerPerson.innerHTML=('$0.00');
        totalPerPerson.innerHTML=('$0.00');
    }
}

resetButton.addEventListener('click', () => {
    tipValue = 0;
    bill.value='0.00';
    people.value='1';
    customTip.value = '';
    tipPerPerson.innerHTML=('$0.00'); totalPerPerson.innerHTML=('$0.00');
    tips.forEach(resetTipStyles); hide(error);
    people.style.borderColor='hsl(185, 41%, 84%)';
})

// get tip value
_5.addEventListener('click', () => {
    calculateTip(_5);
});
_10.addEventListener('click', () => {
    calculateTip(_10);
});
_15.addEventListener('click', () => {
    calculateTip(_15);
});
_20.addEventListener('click', () => {
    calculateTip(_20);
});
_50.addEventListener('click', () => {
    calculateTip(_50);
});

customTip.addEventListener('input', () => {
    if (parseFloat(customTip.value) >= 0) {
        tipValue = parseFloat(customTip.value) / 100;
        tips.forEach(resetTipStyles);
    }
    reloadAll();
})