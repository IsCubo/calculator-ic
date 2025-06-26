// This script handles the functionality of a simple calculator
// It listens for button clicks and updates the display accordingly
const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('button');

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id === '='){                  // If the button is the equals sign
            screen.value = eval(screen.value);  // Evaluate the expression in the screen and update the display
        }else if(button.id === 'C'){            // If the button is the clear button
            screen.value = '';                  // Clear the screen
        }else if(button.id === 'DEL'){          // If the button is the delete button
            screen.value = screen.value.slice(0, -1); // Remove the last character from the screen
        }else{
            screen.value += button.id; // Append the button's id (which is the value) to the screen
        }
    });
});