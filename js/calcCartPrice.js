function calcCartPrice() {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPriceEl = document.querySelector('.total-price');

    let totalPrice = 0;

    cartItems.forEach(function (item) {
       const ammount = item.querySelector('[data-counter]');
       const priceEl = item.querySelector('.price');
       const currentPrice = parseInt(ammount.innerText) * parseInt(priceEl.innerText);
       totalPrice += currentPrice;
    })

    totalPriceEl.innerText = totalPrice;
}