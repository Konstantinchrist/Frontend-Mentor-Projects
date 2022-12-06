const input = document.getElementById('input')
const submitButton = document.getElementById('submit-button')
const error = document.getElementById('error')

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

const errorMessage1 = document.getElementById('error-message-1')

function reset () {
    input.style.border='1px solid black'
    errorMessage1.style.display='none'
    console.log('reset')
}

submitButton.addEventListener('click', () => {
    if (input.value.match(pattern)){
        console.log('valid')
        window.location.reload()
    }
    else{
        reset()
        input.style.border='1px solid red'
        error.style.display='block'
        errorMessage1.style.display='block'
        console.log('not valid')
    }
})

