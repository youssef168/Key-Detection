const box = document.querySelector('.box');
const Key = document.querySelector('.key-code');
const code = document.querySelector('.key-name')

document.addEventListener('keydown', (e)=> {
    box.classList.add('active');
    Key.innerHTML = e.which;
})