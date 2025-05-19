/* product detail page - JS */

document.addEventListener('DOMContentLoaded', () => {
    const plusBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');
    const num = document.querySelector('.option-num');
    const totalPrice = document.querySelector('.total-price');
    const price = document.querySelector('.discount-price');


    const unitPrice = parseInt(price.innerText.replace(/[^0-9]/g, ''));
    let quantity = parseInt(num.innerText);

    function totalFunc() {
        const total = unitPrice * quantity;
        totalPrice.innerText = total.toLocaleString() + '원';
    }

    plusBtn.addEventListener('click', () => {
        quantity += 1;
        num.innerText = quantity;
        totalFunc();
    });

    minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
        quantity -= 1;
        num.innerText = quantity;
        totalFunc();
        }
    });

    
    totalFunc();
});
