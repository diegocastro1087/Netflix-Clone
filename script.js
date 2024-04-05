const buttonOne = document.querySelector('#question_one');
const textOne = document.querySelector('#text_one');
const closes = document.querySelector('#close')
const add = document.querySelector('#add')

buttonOne.onclick = function() {
    if (textOne.style.display === 'block' || textOne.style.display === '') {
        textOne.style.display = 'none';
        add.style.display = 'block'
        closes.style.display = 'none'
    } else {
        textOne.style.display = 'block';
        add.style.display = 'none'
        closes.style.display = 'block'
    }
};
