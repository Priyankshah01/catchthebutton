const button = document.getElementById('funnyButton');
const funnyBox = document.querySelector('.funny-box');
const boxWidth = funnyBox.offsetWidth;
const boxHeight = funnyBox.offsetHeight;
const celebration = document.getElementById('celebration');

button.addEventListener('mouseover', () => {
    const newX = Math.random() * (boxWidth - button.offsetWidth);
    const newY = Math.random() * (boxHeight - button.offsetHeight);

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});

button.addEventListener('click', () => {
    celebration.classList.add('active');
});
