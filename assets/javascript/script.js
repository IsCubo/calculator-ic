const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id === '='){
            screen.value = eval(screen.value);
        }else if(button.id === 'C'){
            screen.value = '';
        }else if(button.id === 'DEL'){
            screen.value = screen.value.slice(0, -1);
        }else{
            screen.value += button.id;
        }
    });
});