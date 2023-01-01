// Variables //

//inputs & errors
const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorPhone = document.getElementById('error-phone');
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
const window1 = document.getElementById('window-1');
const window2 = document.getElementById('window-2');
const window3 = document.getElementById('window-3');
const window4 = document.getElementById('window-4');
const window5 = document.getElementById('window-5');
const windows = Array.from(document.getElementsByClassName('window'));

//modes
const pro = document.getElementById('pro');
const advanced = document.getElementById('advanced');
const arcade = document.getElementById('arcade');
const optionsMode = Array.from(document.getElementsByClassName('option-w2'));

const modeOutput = document.getElementById('mode');
const priceModeOutput = document.getElementById('mode-price-1');
const priceTotalOutput = document.getElementById('total-price-area');

//add-ons
const onlineService = document.getElementById('online-service-w3');
const largerStorage = document.getElementById('larger-storage-w3');
const customProfile = document.getElementById('custom-profile-w3');
const optionsAddons = Array.from(document.getElementsByClassName('option-w3'));

const onlineServiceOutput = document.getElementById('online-service-w4');
const largerStorageOutput = document.getElementById('larger-storage-w4');
const customProfileOutput = document.getElementById('custom-profile-w4');
const choiceAddons = Array.from(document.getElementsByClassName('option-w4'));

//steps sidebar
const number1 = document.getElementById('step-1');
const number2 = document.getElementById('step-2');
const number3 = document.getElementById('step-3');
const number4 = document.getElementById('step-4');
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
    windows.forEach(hide); 
    buttons.forEach(hide);
    stepNumbers.forEach(resetNumberStyle);
}

// window detection and execution
// new steps detect and show requested objects
// step count => show/hide objects
function newStep(){
    resetAll();
    switch (step){ 
        case 1:
            show(window1); show(goBack); show(nextStep); addNumberStyle(number1);
            break;
        case 2:
            show(window2); show(goBack); show(nextStep); addNumberStyle(number2);
            break;
        case 3:
            show(window3); show(goBack); show(nextStep); addNumberStyle(number3);
            break;
        case 4:
            show(window4); show(goBack); show(Confirm); addNumberStyle(number4);
            calculatePrice();
            break;
        case 5:
            show(window5); addNumberStyle(number4);
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
                    inputs.forEach(resetInput); optionsMode.forEach(resetOptions); optionsAddons.forEach(resetOptions);
                    chosenOptionStyle(arcade);
                }
                else{
                    step = 1;
                }
        }
        newStep();
    })
}

// window 1/form validation

function resetInputStyles(element){
    element.style.border='1px solid black';
}

function resetErrorStyles(element){
    element.style.color='white';
}

function resetInput(element){
    element.value = '';
}

function checkFormValidation(){
    inputs.forEach(resetInputStyles);
    errorsInput.forEach(resetErrorStyles);
    if (inputName.value ==''){
        errorName.style.color='red'; 
        inputName.style.border=' 1px solid red';
        // console.log('name invalid');
    }
    if (! inputEmail.value.match(patternEmail)){
        errorEmail.style.color='red';
        inputEmail.style.border=' 1px solid red';
        // console.log('email invalid');
    }
    if (! inputPhone.value.match(patternPhone)){
        errorPhone.style.color='red';
        inputPhone.style.border=' 1px solid red';
        // console.log('phone number invalid');
    }
}
    
// modes & addons (2/3)

function resetOptionStyle(element){
    element.style.borderColor='black'; element.style.background='none';
}
function addOptionStyle(element){
    element.style.borderColor='hsl(243, 100%, 62%)'; element.style.backgroundColor='hsl(231, 100%, 98%)';
}

// window 2/get chosen mode
optionsMode.forEach(chooseMode);
function chooseMode(element){
    element.addEventListener('click', () => {
        optionsMode.forEach(resetOptionStyle); // styling
        addOptionStyle(element); // ''
        mode = element.querySelector('h2').innerHTML; // detect mode
        modePrice = parseFloat(element.querySelector('p').innerHTML.slice(1,3)); // get price of mode
        // console.log('mode: ' + mode); console.log('mode price: ' + modePrice); 
    })
}

// window 3/get chosen mode
optionsAddons.forEach(chooseAddons);
function chooseAddons(element){ // function for detecting addons and performing their styling
    element.value = false;
    element.addEventListener('click', () => {
        if (element.value == false){
            addOptionStyle(element);
            element.value = true;
        }
        else{
            resetOptionStyle(element);
            element.value = false;
        }
        // console.log(element.value)
    })
}

// window 4/caclulate and display price
function calculatePrice(){
    choiceAddons.forEach(hide);
    totalPrice = 0;
        if (onlineService.value == true){ // detect for choice of addons
            onlineServiceOutput.style.display='flex';
            totalPrice += 1;
        }
        if (largerStorage.value == true){ // detect for choice of addons
            largerStorageOutput.style.display='flex';
            totalPrice += 2;
        }
        if (customProfile.value == true){ // detect for choice of addons
            customProfileOutput.style.display='flex';
            totalPrice += 2;
        }
        modeOutput.innerHTML = mode; // output chosen mode
        priceModeOutput.innerHTML = '$' + modePrice + '/mo'; // output price of chose mode
        totalPrice += modePrice; // calculate final total price
        priceTotalOutput.innerHTML=('$' + totalPrice + '/mo') // output total price
}