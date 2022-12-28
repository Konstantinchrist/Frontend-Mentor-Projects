// inputs
const nameInput = document.getElementById('nameInput');
const numberInput = document.getElementById('cardNumberInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const cvcInput = document.getElementById('cvcInput');

// outputs
const nameOutput = document.getElementById('nameOutput');
const numberOutput = document.getElementById('cardNumberOutput');
const expDateOutput = document.getElementById('expDateOutput');
const cvcOutput = document.getElementById('cvcOutput');

const confirmBtn = document.querySelector('button');

document.addEventListener('input', () => {
    if (! nameInput.value == ''){
        nameOutput.innerHTML = 'Cardholder Name: ' + nameInput.value;
    }
    else{
        nameOutput.innerHTML = 'Cardholder Name: Jane Appleseed';
    }

    if (! numberInput.value == ''){
        numberOutput.innerHTML = 'Card Number: ' + numberInput.value;
    }
    else{
        numberOutput.innerHTML = 'Card Number: 0000 0000 0000 0000';
    }

    if (! monthInput.value == '' || ! yearInput.value == ''){
        expDateOutput.innerHTML = 'Exp. Date: ' + (monthInput.value + '/' + yearInput.value);
    }
    else{
        expDateOutput.innerHTML = 'Exp. Date: 00/00';
    }

    if (! cvcInput.value == ''){
        cvcOutput.innerHTML = 'CVC: ' + cvcInput.value;
    }
    else{
        cvcOutput.innerHTML = 'CVC: 000';
    }
    // console.log('new input');
})

confirmBtn.addEventListener('click', () => {
    if (! nameInput.value == ''){
        if (numberInput.value.length == 16){
            if (cvcInput.value.length == 3){
                if (monthInput.value.length == 2 && monthInput.value >= 12){
                    if (yearInput.value.length == 2){
                        console.log('success')
                    }
                }
                else{
                    console.log('month is invalid');
                }
            }
            else{
                console.log('cvc is invalid');
            }
        }
        else{
            console.log('number is invalid');
        }
    }
    else{
        console.log('name is invalid');
    }
})