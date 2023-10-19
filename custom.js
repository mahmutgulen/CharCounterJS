var textArea = document.querySelector('.textarea');

var totalChar = document.getElementById('totalCounter');
var remainingChar = document.getElementById('remainingCounter');


textArea.addEventListener('keyup', () => {
    var charValue = textArea.value.length;
    totalChar.innerHTML = `${charValue}`;
    remainingChar.innerHTML = `${50 - charValue}`;

    remainingChar.style.color = 'green';
    if (remainingChar.innerHTML <= 10) {
        remainingChar.style.color = 'red';
    }

});
