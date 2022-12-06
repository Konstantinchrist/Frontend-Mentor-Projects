const input = document.getElementById('input')
const error = document.getElementById('error')
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
const submitButton = document.querySelector('button')

submitButton.addEventListener('click', () => {
    if (input.value.match(pattern) ){
        window.location.reload()
    }
    else{
        error.style.display='block'
        input.style.border='1px solid red'
    }
})