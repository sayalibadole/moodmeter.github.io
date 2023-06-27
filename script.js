const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Happy'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }

})

sendBtn.addEventListener('click', (e) => {
    let message = '';

    if (selectedRating === 'Happy') {
        message = 'Your happiness is contagious! Im glad to see you in such high spirits!';
    } else if (selectedRating === 'Neutral') {
        message = 'I understand that feeling. Neutral days can provide a chance for reflection and self-care.';
    } else if (selectedRating === 'Unhappy') {
        message = 'Its tough when you are feeling unhappy. Remember that its okay to have bad days.';
    }

    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <br>
        <strong>MoodMeter: ${selectedRating}</strong>
        <p> ${message}</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}
