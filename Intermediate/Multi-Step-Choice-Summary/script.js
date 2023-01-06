// Variables //

//inputs & errors
//const errorName = document.getElementById('error-name');
//const errorEmail = document.getElementById('error-email');
//const errorPhone = document.getElementById('error-phone');
const errorsInput = Array.from(document.getElementsByClassName('error-message'));

const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputPhone = document.getElementById('input-phone');
const inputs = Array.from(document.getElementsByClassName('input'));

//patterns
const patternEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const patternPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

//buttons 
const goBack = document.getElementById('goBack');
const nextStep = document.getElementById('nextStep');
const Confirm = document.getElementById('confirm');
const buttons = Array.from(document.getElementsByClassName('button'));

//windows
const windows = Array.from(document.getElementsByClassName('window'));

//modes
const optionsMode = Array.from(document.getElementsByClassName('option-w2'));

const modeOutput = document.getElementById('mode');
const priceModeOutput = document.getElementById('mode-price-1');
const priceTotalOutput = document.getElementById('total-price-area');

//add-ons
const optionsAddons = Array.from(document.getElementsByClassName('option-w3'));
const choiceAddons = Array.from(document.getElementsByClassName('option-w4'));

//steps sidebar
const stepNumbers = Array.from(document.querySelectorAll('.sidebar-step-number'));

//counters & else
let step = 1;
let mode = 'Arcade';
let modePrice = 9;
let totalPrice = 0;  

resetAll(); newStep(); addOptionStyle(arcade);

// functions (general) //
function hide(element){
    element.style.display = 'none';
}

function show(element){
    element.style.display = 'block';
}

function resetAll(){
    windows.forEach(hide); buttons.forEach(hide); stepNumbers.forEach(resetNumberStyle);
}

// window detection and execution
// new steps detect and show requested objects
// step count => show/hide objects
function newStep(){
    resetAll();
    show(document.getElementById('window-'+ step));
    if (step < 5){
        addNumberStyle(document.getElementById('number' + step));
    }
    switch (step){ 
        case 1:
            show(goBack); show(nextStep);
            break;
        case 2:
            show(goBack); show(nextStep);
            break;
        case 3:
            show(goBack); show(nextStep);
            break;
        case 4:
            show(goBack); show(Confirm); 
            calculatePrice();;
    }
}

// function for marking "step" at sidebar
function addNumberStyle(element){
    element.style.backgroundColor='white'; element.style.color='black';
}

function resetNumberStyle(element){
    element.style.color='white'; element.style.background='none';
}

// navigation //

// navigation by sidebar 
stepNumbers.forEach(numbersSidebar);
function numbersSidebar(element){ 
    element.addEventListener('click', () => {
        step = parseFloat(element.innerHTML);
        newStep();
    })
}

// navigation by buttons
buttons.forEach(buttonsWindows);
function buttonsWindows(element){
    element.addEventListener('click', () => {
        switch (element.innerHTML){
            case 'Go back': // -1 step
                if (step > 1){
                    step--;
                }
                break;
            case 'Next step': // +1 step
                if (step == 1){
                    checkFormValidation();
                    if (! inputName.value == '' &&
                        inputEmail.value.match(patternEmail) &&
                        inputPhone.value.match(patternPhone)){ // detect for invalid name/email/phoneNumber
                        step++;
                    }
                }
                else{
                    step++;
                }
                break;
            case 'Confirm': // +1 step (finalstep)
                checkFormValidation();
                if (! inputName.value == '' &&
                    inputEmail.value.match(patternEmail) &&
                    inputPhone.value.match(patternPhone)){ // detect for invalid name/email/phoneNumber
                    step++;
                    resetAll();
                    inputs.forEach(function (element){
                        element.style.border='1px solid black';
                    });
                    inputs.forEach(function (element){
                        element.value = '';
                    }

                    ); 
                    optionsMode.forEach(resetOptionStyle); optionsAddons.forEach(resetOptionStyle);
                    addOptionStyle(arcade);
                    mode = 'Arcade'; modePrice = 9;
                    calculatePrice();
                }
                else{
                    step = 1;
                }
        }
        newStep();
    })
}

// window 1/form validation
function checkFormValidation(){
    inputs.forEach(function (element){
        element.style.border='1px solid black';
    });
    errorsInput.forEach(function (element){
        element.style.color='white';
    });

    inputs.forEach(function (element){
        if (element.value == '' || ! element.value.match(patternEmail)){
            element.style.border=' 1px solid red';
            console.log((element.id.slice(6)+ '-error'))
            document.getElementById(element.id.slice(6)+ '-error').style.color='red';
        }
    })
}
    
// modes & addons (2/3)

function resetOptionStyle(element){
    element.style.borderColor='black'; element.style.background='none';
    element.value = false;
}
function addOptionStyle(element){
    element.style.borderColor='hsl(243, 100%, 62%)'; element.style.backgroundColor='hsl(231, 100%, 98%)';
    element.value = true;
}

// window 2/get chosen mode
optionsMode.forEach(function (element){
    element.addEventListener('click', () => {
        optionsMode.forEach(resetOptionStyle); // styling
        addOptionStyle(element); // ''
        mode = element.querySelector('h2').innerHTML; // detect mode
        modePrice = parseFloat(element.querySelector('p').innerHTML.slice(1,3)); // get price of mode
        // console.log('mode: ' + mode); console.log('mode price: ' + modePrice); 
    })
});

// window 3/get chosen mode
optionsAddons.forEach(function (element){
    element.value = false;
    element.addEventListener('click', () => {
        if (element.value == false){
            addOptionStyle(element);
        }
        else{
            resetOptionStyle(element);
        }
        // console.log(element.value)
    })
});

// window 4/caclulate and display price
function calculatePrice(){
    choiceAddons.forEach(hide);
    totalPrice = 0;
    optionsAddons.forEach(function (element) {
        if (element.value == true){ // detect for choice of addons
            document.getElementById(element.id + 'Output').style.display = 'flex';
            totalPrice += parseFloat(element.querySelector('.plus-price').innerHTML.slice(2));
        }
    })
    modeOutput.innerHTML = mode; // output chosen mode
    priceModeOutput.innerHTML = '$' + modePrice + '/mo'; // output price of chose mode
    totalPrice += modePrice; // calculate final total price
    priceTotalOutput.innerHTML = '$' + totalPrice + '/mo'; // output total price
}