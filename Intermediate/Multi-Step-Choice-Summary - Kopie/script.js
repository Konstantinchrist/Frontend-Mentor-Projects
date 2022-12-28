// Variables

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

const modeW4 = document.getElementById('mode');
const priceMode = document.getElementById('mode-price-1');
const priceArea = document.getElementById('total-price-area');

//add-ons
const onlineService = document.getElementById('online-service-w3');
const largerStorage = document.getElementById('larger-storage-w3');
const customProfile = document.getElementById('custom-profile-w3');
const optionsAddons = Array.from(document.getElementsByClassName('options-w3'));

const onlineServiceW4 = document.getElementById('online-service-w4');
const largerStorageW4 = document.getElementById('larger-storage-w4');
const customProfileW4 = document.getElementById('custom-profile-w4');
const choiceAddons = Array.from(document.getElementsByClassName('option-w4'));

//steps sidebar
const number1 = document.getElementById('step-1');
const number2 = document.getElementById('step-2');
const number3 = document.getElementById('step-3');
const number4 = document.getElementById('step-4');
const stepNumbers = Array.from(document.querySelectorAll('.sidebar-step-number'));

//counters
let step = 1;
let mode = 'arcade';
let modePrice = 9;
let onlineServiceOption = false;
let largerStorageOption = false;
let customProfileOption = false;
let formValid = false;
let totalPrice = 0;  

resetAll(); newStep();
arcade.style.borderColor='hsl(243, 100%, 62%)'; arcade.style.backgroundColor='hsl(231, 100%, 98%)';

// functions
function hide(element){
    element.style.display = 'none';
}

function show(element){
    element.style.display = 'block';
}

function calculatePrice(){
    choiceAddons.forEach(hide); totalPrice = 0;
        if (onlineServiceOption == true){//detect for choice of addons
            onlineServiceW4.style.display='flex';
            totalPrice += 1;
        }
        if (largerStorageOption == true){//detect for choice of addons
            largerStorageW4.style.display='flex';
            totalPrice += 2;
        }
        if (customProfileOption == true){//detect for choice of addons
            customProfileW4.style.display='flex';
            totalPrice += 2;
        }

        modeW4.innerHTML = mode;
        priceMode.innerHTML = '$' + modePrice + '/mo';
        totalPrice += modePrice;
        
        priceArea.innerHTML=('$' + totalPrice + '/mo')
}

// reset functions
function resetAll(){
    windows.forEach(hide); 
    buttons.forEach(hide);
    stepNumbers.forEach(resetSidebar);
}

function resetSidebar(element){
    element.style.color='white'; element.style.background='none';
}

function resetErrors(){
    inputs.forEach(resetInputStyles); errorsInput.forEach(resetErrorStyles);
}

function resetInputStyles(element){
    element.style.border='1px solid black';
}

function resetErrorStyles(element){
    element.style.color='white';
}

function resetOptions(element){
    element.style.borderColor='black'; element.style.background='none';
}

// window detection and execution
// new steps detect and show right objects
function newStep(){
    resetAll();
    switch (step){
        case 1:
            window1.style.display='block';
            number1.style.backgroundColor='white'; number1.style.color='black';
            nextStep.style.display='block'; goBack.style.display='block';
            break;
        case 2:
            window2.style.display='block';
            number2.style.backgroundColor='white'; number2.style.color='black';
            goBack.style.display='block'; nextStep.style.display='block';
            break;
        case 3:
            window3.style.display='block';
            number3.style.backgroundColor='white'; number3.style.color='black';
            goBack.style.display='block'; nextStep.style.display='block';
            break;
        case 4:
            window4.style.display='block';
            number4.style.backgroundColor='white'; number4.style.color='black';
            Confirm.style.display='block'; goBack.style.display='block';
            calculatePrice();
            break;
        case 5:
            window5.style.display='block';
            number4.style.backgroundColor='white'; number4.style.color='black';
    }
}

// move windows by sidebar function
function numbersSidebar(element){ 
    element.addEventListener('click', () => {
        step = parseFloat(element.innerHTML);
        newStep();
    })
}

// move windows by buttons function
function buttonsWindows(element){
    element.addEventListener('click', () => {
        switch (element.innerHTML){
            case 'Go back':
                if (step > 1){
                    step--;
                }
                break;
            case 'Next step':
                if (step == 1){
                    checkFormValidation();
                    if (formValid == true){
                        step++;
                    }
                }
                else{
                    step++;
                }
                break;
            case 'Confirm': 
                checkFormValidation();
                if (formValid == true){
                    step++;
                }
                else{
                    step = 1;
                }
        }
        newStep();
    })
}

// choose mode
function chooseMode(element){
    element.addEventListener('click', () => {
        optionsMode.forEach(resetOptions);
        mode = element.querySelector('h2').innerHTML.toLowerCase();
        modePrice = parseFloat(element.querySelector('p').innerHTML.slice(1,3));
        element.style.borderColor='hsl(243, 100%, 62%)'; element.style.backgroundColor='hsl(231, 100%, 98%)';
        console.log('mode: ' + mode); console.log('mode price: ' + modePrice); 
    })
}

// move windows by sidebar
stepNumbers.forEach(numbersSidebar);

// move windows by buttons
buttons.forEach(buttonsWindows);

// window 1/form validation
function checkFormValidation(){
    resetErrors();
    if (inputName.value == ''){
        errorName.style.color='red'; inputName.style.border=' 1px solid red';
        console.log('name invalid');
        formValid = false;
    }
    else{
        formValid = true;
    }
    if (! inputEmail.value.match(patternEmail)){
        errorEmail.style.color='red'; inputEmail.style.border=' 1px solid red';
        console.log('email invalid');
        formValid = false;
    }
    else{
        formValid = true;
    }
    if (! inputPhone.value.match(patternPhone)){
        errorPhone.style.color='red'; inputPhone.style.border=' 1px solid red';
        console.log('phone number invalid');
        formValid = false;
    }
    else{
        formValid = true;
    }
}
    
// window 2/get chosen mode
optionsMode.forEach(chooseMode);

// window 3/get chosen mode
onlineService.addEventListener('click', () => {
    if (onlineServiceOption == false){
        onlineService.style.borderColor='hsl(243, 100%, 62%)'; onlineService.style.backgroundColor='hsl(231, 100%, 98%)';
        onlineServiceOption = true;
    }
    else if (onlineServiceOption == true){
        onlineService.style.background='none'; onlineService.style.borderColor='hsl(231, 11%, 63%)';
        onlineServiceOption = false;
    }
})
largerStorage.addEventListener('click', () => {
    if (largerStorageOption == false){
        largerStorage.style.borderColor='hsl(243, 100%, 62%)'; largerStorage.style.backgroundColor='hsl(231, 100%, 98%)';
        largerStorageOption = true;
    }
    else if (largerStorageOption == true){
        largerStorage.style.background='none'; largerStorage.style.borderColor='hsl(231, 11%, 63%)';
        largerStorageOption = false;
    }
})
customProfile.addEventListener('click', () => {
    if (customProfileOption == false){
        customProfile.style.borderColor='hsl(243, 100%, 62%)'; customProfile.style.backgroundColor='hsl(231, 100%, 98%)';
        customProfileOption = true;
    }
    else if (customProfileOption == true){
        customProfile.style.background='none'; customProfile.style.borderColor='hsl(231, 11%, 63%)';
        customProfileOption = false;
    }
})
