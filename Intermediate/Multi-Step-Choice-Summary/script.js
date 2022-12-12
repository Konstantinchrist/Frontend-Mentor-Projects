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
const patternPhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

//buttons 
const goBack = document.getElementById('goBack');
const nextStep = document.getElementById('nextStep');
const Confirm = document.getElementById('confirm');
const Buttons = Array.from(document.getElementsByClassName('button'));

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
const stepNumbers = Array.from(document.getElementsByClassName('sidebar-step-number'));

//counters
let step = 1;
let mode = 0;

let onlineServiceOption = 0;
let largerStorageOption = 0;
let customProfileOption = 0;

let totalPrice = 0;  

// functions

//reset functions

function resetCount(){
    step === 0;
}

//input window-1
function resetInputStyles(element){
    element.style.border='1px solid black';
}

function resetErrorStyles(element){
    element.style.color='white';
}

function resetWindow1(){
    inputs.forEach(resetInputStyles); errorsInput.forEach(resetErrorStyles);
}

//options window-2
function resetOptionsW2(element){
    element.style.border='1px solid hsl(231, 11%, 63%)'; element.style.background='none';
    mode == 0;
}

//options window-3
function resetOptionsW3(element){
    element.style.border='1px solid black'; element.style.background='none';
}

//choice window-4
function resetChoice(){
    choiceAddons.forEach(resetChoiceAddons);
    totalPrice = 0;
}

function resetChoiceAddons(element){
    element.style.display='none';
}

// general 
function resetNavigation(element){
    element.style.display='none';
}

function resetSidebar(element){
    element.style.color='white'; element.style.background='none';
}

function resetWindows(element){
    element.style.display='none';
} 

function resetAll(){
    windows.forEach(resetWindows); stepNumbers.forEach(resetSidebar); Buttons.forEach(resetNavigation); 
}

newStep(); // reset at beginning  
 

//button event detection
goBack.addEventListener('click', () => {
    if (step > 1){ // detect for too low step number
        if (step == 4){
            resetChoice();
        }
        step = step - 1;
    }
    console.log(step);
    newStep();
})

nextStep.addEventListener('click', () => {
    if (step == 3){
        resetChoice();
        if (onlineServiceOption == 1){//detect for choice of addons
            onlineServiceW4.style.display='flex';
            totalPrice = totalPrice + 1;
        }
        if (largerStorageOption == 1){//detect for choice of addons
            largerStorageW4.style.display='flex';
            totalPrice = totalPrice + 2;
        }
        if (customProfileOption == 1){//detect for choice of addons
            customProfileW4.style.display='flex';
            totalPrice = totalPrice + 2;
        }

        if (mode == 3){//detect for choice of mode
            modeW4.innerHTML = ('Pro'); priceMode.innerHTML = ('$15/mo');
            totalPrice = totalPrice + 15;
            if (step < 5){ // detect for too high step number
                step = step + 1;
            }
        }
        if (mode == 2){//detect for choice of mode
            modeW4.innerHTML = ('Advanced'); priceMode.innerHTML = ('$12/mo');
            totalPrice = totalPrice + 12;
            if (step < 5){ // detect for too high step number
                step = step + 1;
            }
        }
        if (mode == 1){//detect for choice of mode
            modeW4.innerHTML = ('Arcade'); priceMode.innerHTML = ('$9/mo');
            totalPrice = totalPrice + 9;
            if (step < 5){ // detect for too high step number
                step = step + 1;
            }
        }
        priceArea.innerHTML=('$'+totalPrice+'/mo')
    }

    if (step == 2){
        if (! mode == 0){
            if (step < 5){ // detect for too high step number
                step = step + 1;
            }
        }
    }

    if (step == 1){
        if (! inputName.value == ''){ // detect for invalid name
            if (inputEmail.value.match(patternEmail)){ // detect for invalid email
                if (inputPhone.value.match(patternPhone)){ // detect for invlaid phone number
                    if (step < 5){ // detect for too high step number
                        step = step + 1;
                    }
                }
            }
        }
    }
    newStep();
})


Confirm.addEventListener('click', () => {
    if (step < 5){ // detect for too high step number
        step = step + 1;
    }
    newStep();
})



//detect step number and execute  
function newStep (){
    if (step == 1){
        resetAll();
        window1.style.display='block';
        number1.style.backgroundColor='white'; number1.style.color='black';
        goBack.style.display='block'; nextStep.style.display='block'; 
    } 
    if (step == 2) {
        resetAll();
        window2.style.display='block';
        number2.style.backgroundColor='white'; number2.style.color='black';
        goBack.style.display='block'; nextStep.style.display='block';
    }
    if (step == 3) {
        resetAll();
        window3.style.display='block';
        number3.style.backgroundColor='white'; number3.style.color='black';
        goBack.style.display='block'; nextStep.style.display='block';
    } 
    if (step == 4) {
        resetAll();
        window4.style.display='block';
        number4.style.backgroundColor='white'; number4.style.color='black';
        Confirm.style.display='block'; goBack.style.display='block';
    } 
    if (step == 5) {
        resetAll();
        window5.style.display='block';
        number4.style.backgroundColor='white'; number4.style.color='black';
    } 
    
}

//window 1 input errors detect and execute
nextStep.addEventListener('click', () => {
    resetWindow1();
    console.log('execute validation check')
    if (inputName.value =='' || ! inputName.value == 'x'){
        errorName.style.color='red'; 
        inputName.style.border=' 1px solid red';
        console.log('name invalid');
    }
    if (! inputEmail.value.match(patternEmail)){
        errorEmail.style.color='red';
        inputEmail.style.border=' 1px solid red';
        console.log('email invalid');
    }
    if (! inputPhone.value.match(patternPhone)){
        errorPhone.style.color='red';
        inputPhone.style.border=' 1px solid red';
        console.log('phone number invalid');
    }
})


//window 2 detect chosen optiopn and execute
arcade.addEventListener('click', () => {
    optionsMode.forEach(resetOptionsW2);
    arcade.style.border='1px solid black'; arcade.style.backgroundColor='hsl(231, 100%, 98%)';
    mode = 1;
    console.log('mode:' + mode);
})
advanced.addEventListener('click', () => {
    optionsMode.forEach(resetOptionsW2);
    advanced.style.border='1px solid black'; advanced.style.backgroundColor='hsl(231, 100%, 98%)';
    mode = 2;   
    console.log('mode:' + mode);
})
pro.addEventListener('click', () => {
    optionsMode.forEach(resetOptionsW2);
    pro.style.border='1px solid black'; pro.style.backgroundColor='hsl(231, 100%, 98%)';
    mode = 3;
    console.log('mode:' + mode);
})


//window 3
onlineService.addEventListener('click', () => {
    if (onlineServiceOption == 0){
        onlineService.style.borderColor='black'; onlineService.style.backgroundColor='hsl(231, 100%, 98%)';
        onlineServiceOption = 1;
    }
    else if (onlineServiceOption == 1){
        onlineService.style.background='none'; onlineService.style.borderColor='hsl(231, 11%, 63%)';
        onlineServiceOption = 0;
    }
})
largerStorage.addEventListener('click', () => {
    if (largerStorageOption == 0){
        largerStorage.style.borderColor='black'; largerStorage.style.backgroundColor='hsl(231, 100%, 98%)';
        largerStorageOption = 1;
    }
    else if (largerStorageOption == 1){
        largerStorage.style.background='none'; largerStorage.style.borderColor='hsl(231, 11%, 63%)';
        largerStorageOption = 0;
    }
})
customProfile.addEventListener('click', () => {
    if (customProfileOption == 0){
        customProfile.style.borderColor='black'; customProfile.style.backgroundColor='hsl(231, 100%, 98%)';
        customProfileOption = 1;
    }
    else if (customProfileOption == 1){
        customProfile.style.background='none'; customProfile.style.borderColor='hsl(231, 11%, 63%)';
        customProfileOption = 0;
    }
})