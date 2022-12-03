const ratingInterface = document.querySelector('.rating-interface')
const thankYou = document.querySelector('.thank-you-interface')
const submitButton = document.getElementById('submit-button')
const rateAgainButton = document.getElementById('backToRating-button')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.rating-button')

submitButton.addEventListener('click', () => {
    thankYou.style.display = 'block'
    ratingInterface.style.display = 'none'
})

rateAgainButton.addEventListener('click', () => {
    thankYou.style.display = 'none'
    ratingInterface.style.display = 'block'
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})

