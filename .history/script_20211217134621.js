const box = document.querySelector('.box');
const Key = document.querySelector('.key-code');
const code = document.querySelector('.key-name')
const innerKey = document.querySelector('.key')

document.addEventListener('keydown', (e)=> {
    box.classList.add('active');
    Key.innerHTML = e.which;
    code.innerHTML = e.code
})