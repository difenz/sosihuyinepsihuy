const cartWrapper = document.querySelector('.cart-wrapper');
let productInfo; 

window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.filterDiv');

        productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-image').getAttribute('src'),
            title: card.querySelector('.item_title').innerText,
            pretitle: card.querySelector('.pre-title').innerText,
            price: card.querySelector('.price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            console.log(productInfo);
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                <div class="filterDiv cold" data-id="xylinetcoconut">
                    <h2 class="block__title pre-title">${productInfo.pretitle}</h2>
                    <h1 class="block__title item_title">${productInfo.title}</h1>
                    <div class="btns">
                        <p id="counter50" data-counter>${productInfo.counter}</p> <span class="counter50">шт.</span>
                    </div>
                    <h1 class="price">${productInfo.price}</h1>
                </div>
            </div>`;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }

        toggleCartStatus();
        calcCartPrice();
    }
});

async function sendToTelegram(message) {
  
// const botToken = 'тут токен';
// const chatId = 'тут айди чата';
const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();

    const productsArray = []; 
    

    const formData = new FormData(document.getElementById('telegram'));
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });


    const cartItems = cartWrapper.querySelectorAll('.cart-item');
    cartItems.forEach((cartItem) => {
        const product = {
            pretitle: cartItem.querySelector('.pre-title').innerText,
            title: cartItem.querySelector('.item_title').innerText,
            counter: cartItem.querySelector('[data-counter]').innerText
        };
        productsArray.push(product);
    });


    let message = "Имя отправителя: " + formDataObject.name + "\n";
    message += "Номер: " + formDataObject.phone + "\n";
    message += "Telegram: " + formDataObject.telegram + "\n";
    message += "Список товаров: \n";
    productsArray.forEach((product) => {
        message += `${product.pretitle} ${product.title}, ${product.counter} шт.\n`;
    });

    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach((counter) => {
        counter.innerText = '0'; // Обнуляем счетчик
    });

    sendToTelegram(message);

    cartWrapper.innerHTML = '';

    const popup = document.createElement('div');
    popup.className = 'popup fade-in'; 
    popup.innerText = 'Заказ успешно оформлен, скоро с вами свяжется наш менеджер!';
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('fade-out');
        setTimeout(() => {
            popup.remove();
        }, 500);
    }, 3000);
    
 // Сбросить значения формы
 const form = document.getElementById('telegram');
 form.reset();

    for (var index in modals) {
        if (typeof modals[index].style !== "undefined") {
            modals[index].style.display = "none";
        }
    }

});