const box = document.querySelector('.box');
const Key = document.querySelector('.key-code');

document.addEventListener('keydown', (e)=> {
    box.classList.add('active');
    Key.innerHTML = e.which;
})