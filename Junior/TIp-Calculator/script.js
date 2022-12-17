const people = document.getElementById('people-input');
const bill = document.getElementById('bill-input');
const restartButton = document.getElementById('submit-btn');
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

let billValue = 0.00;
let peopleValue = 1;
let tipValue = 0.00;

bill.addEventListener('input', reloadAll);
people.addEventListener('input', reloadAll);

function resetTipStyles(element){
    element.style.backgroundColor = 'hsl(183, 100%, 15%)';
    console.log('resetTipStyles');
}

function resetAll(){
    tipValue = 0;
    bill.value='0.00';
    people.value='1';
    customTip.value = '';
    tipPerPerson.innerHTML=('$0.00');
    totalPerPerson.innerHTML=('$0.00');
    error.style.display='none';
    people.style.borderColor='hsl(185, 41%, 84%)';
}


function reloadAll(){
    if (! people.value == 0){
        console.log(parseFloat(people.value))
        if (bill.value == ''){
            billValue = 0.00;
            bill.value='0.00';
            people.value='1';
        }
        else{
            error.style.display='none';
            let billValue = parseFloat(bill.value);
            let peopleValue = parseFloat(people.value);

            let tipAmountperPerson = ((billValue / peopleValue * tipValue));
            console.log('Tip per person: $' + tipAmountperPerson);

            let totalPerPersonWithTip = ((billValue / peopleValue) + tipAmountperPerson);
            console.log('Total per person: $' + totalPerPersonWithTip);

            tipPerPerson.innerHTML=('$' + (tipAmountperPerson.toFixed(2)));
            totalPerPerson.innerHTML=('$' + (totalPerPersonWithTip.toFixed(2)));

            console.log(peopleValue);
            console.log(billValue);
        }
        error.style.display='none';
        people.style.borderColor='hsl(185, 41%, 84%)';
    }
    else{
        error.style.display='block';
        people.style.borderColor='red';
    }
}

restartButton.addEventListener('click', () => {
    resetAll();
})

_5.addEventListener('click', () => {
    tipValue = 0.05;
    reloadAll(); tips.forEach(resetTipStyles);
    _5.style.backgroundColor = 'hsl(172, 56%, 34%)';
    console.log('tip value: ' + tipValue)
})

_10.addEventListener('click', () => {
    tipValue = 0.1;
    reloadAll(); tips.forEach(resetTipStyles);
    _10.style.backgroundColor = 'hsl(172, 56%, 34%)';
    console.log('tip value: ' + tipValue)
})

_15.addEventListener('click', () => {
    tipValue = 0.15;
    reloadAll(); tips.forEach(resetTipStyles);
    _15.style.backgroundColor = 'hsl(172, 56%, 34%)';
    console.log('tip value: ' + tipValue)
})

_20.addEventListener('click', () => {
    tipValue = 0.20;
    reloadAll(); tips.forEach(resetTipStyles);
    _20.style.backgroundColor = 'hsl(172, 56%, 34%)';
    console.log('tip value: ' + tipValue);
})

_50.addEventListener('click', () => {
    tipValue = 0.50
    reloadAll(); tips.forEach(resetTipStyles);
    _50.style.backgroundColor = 'hsl(172, 56%, 34%)';
    console.log('tip value: ' + tipValue)
})

customTip.addEventListener('input', () => {
    reloadAll(); tips.forEach(resetTipStyles);
    parseFloat(customTip.value);
    tipValue = (customTip.value / 100);
    console.log('tip value: ' + tipValue)
    reloadAll();
})

