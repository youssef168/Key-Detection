const box = document.querySelector('.box');

document.addEventListener('keydown', (e)=> {
    box.classList.add('active');
    console.log(e.code)
})