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
const _25 = document.getElementById('twenty-five');
const _50 = document.getElementById('fifty');
const tips = Array.from(document.getElementsByClassName('tip'));

bill.value='0.00';
people.value='1';

let billValue = 0.00;
let peopleValue = 1;
let tipValue = 0.00;

bill.addEventListener('input', reloadAll);
people.addEventListener('input', reloadAll);

function resetTipStyles(){
    element.style.backgroundColor='hsl(183, 100%, 15%)';
}


function reloadAll(){
    if (! people.value==''){
        if (bill.value == ''){
            billValue = 0.00;
        }
        else{
            error.style.display='none';
            let billValue = parseFloat(bill.value);
            let peopleValue = parseFloat(people.value);

            let tipAmountperPerson = (billValue / peopleValue * tipValue);
            console.log('Tip per person: $' + tipAmountperPerson);

            let totalPerPersonWithTip = ((billValue / peopleValue) + tipAmountperPerson);
            console.log('Total per person: $' + totalPerPersonWithTip);

            tipPerPerson.innerHTML=('$' + (tipAmountperPerson));
            totalPerPerson.innerHTML=('$' + (totalPerPersonWithTip));

            console.log(peopleValue);
            console.log(billValue);
        }
        
    }
    else{
        error.style.display='block';
    }
}


_5.addEventListener('click', () => {
    tipValue = 0.05;
    console.log('tip value: ' + tipValue)
})

_10.addEventListener('click', () => {
    tipValue = 0.1;
    console.log('tip value: ' + tipValue)
})

_15.addEventListener('click', () => {
    tipValue = 0.15;
    console.log('tip value: ' + tipValue)
})

_20.addEventListener('click', () => {
    tipValue = 0.20;
    console.log('tip value: ' + tipValue)
})

_25.addEventListener('click', () => {
    tipValue = 0.25;
    console.log('tip value: ' + tipValue)
})

_50.addEventListener('click', () => {
    tipValue = 0.50;
    console.log('tip value: ' + tipValue)
})


tips.forEach(function(val){
    resetTipStyles();
    console.log('add style')
    val.style.backgroundColor='hsla(172, 56%, 54%, 0.767)';
    val.addEventListener('click', tipStyles);
})
