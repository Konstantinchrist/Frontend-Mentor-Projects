const generateAdviceBtn = document.getElementById('generateAdvice');
const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('advice');
const url = 'https://api.adviceslip.com/advice';

getAdvice();

async function getAdvice(){
    const res = await fetch(url);
    const {slip: {id, advice} } = await res.json();
    adviceId.innerText = id;
    adviceText.innerText = advice;
}

generateAdviceBtn.addEventListener('click', () => {
    getAdvice();
});