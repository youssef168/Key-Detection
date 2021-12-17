const box = document.querySelector('.box');
const Key = document.querySelector('.key-code');
const code = document.querySelector('.key-name')
const innerKey = document.querySelector('.key')
const  innerCode = document.querySelect

document.addEventListener('keydown', (e)=> {
    box.classList.add('active');
    Key.innerHTML = e.which;
    innerKey.innerHTML = e.which;
    code.innerHTML = e.code
    innerCode.innerHTML = e.code
})