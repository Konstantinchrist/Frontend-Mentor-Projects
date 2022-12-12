const firstName = document.getElementById('firstname')
dconst lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')

const form = document.querySelector('form')

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

const svgFirstname = document.getElementById('svg-firstname')
const svgLastname = document.getElementById('svg-lastname')
const svgEmail = document.getElementById('svg-email')
const svgPassword = document.getElementById('svg-password')

const errorFirstname = document.getElementById('error-firstname')
const errorLastname = document.getElementById('error-lastname')
const errorEmail = document.getElementById('error-email')
const errorPassword = document.getElementById('error-password')

const input = document.querySelector('input')

const submitButton = document.getElementById('submit-button')
const backButton = document.getElementById('back-to-sign-in')


submitButton.addEventListener('click', () => {
    if (firstName.value == ''){
        svgFirstname.style.display='block'
        firstName.style.border='1px solid red'
        errorFirstname.style.color='red'
    }else{
        svgFirstname.style.display='none'
        firstName.style.border='1px solid hsl(249, 10%, 26%)'
        errorFirstname.style.color='white'
    }
    if (lastName.value == ''){
        svgLastname.style.display='block'        
        lastName.style.border='1px solid red'
        errorLastname.style.color='red'
    }else{
        svgLastname.style.display='none'
        lastName.style.border='1px solid hsl(249, 10%, 26%)'
        errorLastname.style.color='white'
    }
    if (!email.value.match(pattern)){
        svgEmail.style.display='block'
        email.style.border='1px solid red'
        errorEmail.style.color='red'
    }else{
        svgEmail.style.display='none'
        email.style.border='1px solid hsl(249, 10%, 26%)'
        errorEmail.style.color='white'
    }
    if (password.value == ''){
        svgPassword.style.display='block'
        password.style.border='1px solid red'
        errorPassword.style.color='red'
    }
    else{
        svgPassword.style.display='none'
        password.style.border='1px solid hsl(249, 10%, 26%)'
        errorPassword.style.color='white'
    }
})

submitButton.addEventListener('click', () => {
    if (firstName.value > ''){
        if (lastName.value > ''){
            if (email.value.match(pattern)){
                if (password.value > ''){
                    console.log('siu')
                    window.location.reload()
                }
            }
        }
    }  
})