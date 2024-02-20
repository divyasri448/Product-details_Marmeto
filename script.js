document.addEventListener('DOMContentLoaded', function () {
    // Functionality for the size and color option buttons
    var colorOptionButtons = document.querySelectorAll('.color-option');
    var sizeOptionButtons = document.querySelectorAll('.size-option');

    colorOptionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var currentColor = document.querySelector('.current-color');
            if (currentColor) {
                currentColor.classList.remove('current-color');
            }
            this.classList.add('current-color');
        });
    });

    sizeOptionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var currentSize = document.querySelector('.current-size');
            if (currentSize) {
                currentSize.classList.remove('current-size');
            }
            this.classList.add('current-size');
        });
    });

    // Quantity buttons functionality
    var decreaseButton = document.querySelector('.decrease');
    var increaseButton = document.querySelector('.increase');
    var countInput = document.querySelector('.count');

    decreaseButton.addEventListener('click', function () {
        var currentCount = parseInt(countInput.value);
        if (currentCount > 1) {
            countInput.value = currentCount - 1;
        }
    });

    increaseButton.addEventListener('click', function () {
        var currentCount = parseInt(countInput.value);
        countInput.value = currentCount + 1;
    });

    // Add to cart button functionality
    var addToCartButton = document.querySelector('.add-to-cart');
    var addedMessage = document.querySelector('.added-message');

    addToCartButton.addEventListener('click', function () {
        var currentSize = document.querySelector('.current-size');
        if (currentSize) {
            addedMessage.querySelector('p').textContent = 'Size ' + currentSize.textContent + ' added to cart';
            addedMessage.style.display = 'block';
        } else {
            addedMessage.querySelector('p').textContent = 'Please select a size before adding to cart';
            addedMessage.style.display = 'block';
        }
    });
});
