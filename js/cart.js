window.addEventListener('click', function(event) {
    let counter;

    if (event.target.dataset.action === "plusBtn" || event.target.dataset.action === "minusBtn" ) {
        const btnParent = event.target.closest('.btns');
        counter = btnParent.querySelector('[data-counter]');
    }
    if (event.target.dataset.action === 'plusBtn') {
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minusBtn') {
        const btnParent = event.target.closest('.btns');
        const counter = btnParent.querySelector('[data-counter]');
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
            }
    }
})




// const minusBtn = document.querySelector('[data-action="minusBtn"]');
// const plusBtn = document.querySelector('[data-action="plusBtn"]');
// const counter = document.querySelector('[data-counter]');


// minusBtn.addEventListener('click', function() {
//     console.log('minus')

    // if (parseInt(counter.innerText) > 0) {
    // counter.innerText = --counter.innerText;

    // }
// })

// plusBtn.addEventListener('click', function() {
//     console.log('plus')
//     counter.innerText = ++counter.innerText;
// })


// let cart = {
//     'xylinetcoldananac': {
//         "name": "Кокосовый Блоуджоб",
//         "count": 1,
//     },
//     'xylinetcoldcherry': {
//         "name": "Вишня Лайм",
//         "count": 1,
//     },
// };

// document.onclick = event => {
//     if (event.target.classList.contains('plus')) {
//         plusFunction(event.target.dataset.id);
//     }
//     if (event.target.classList.contains('minus')) {
//         minusFunction(event.target.dataset.id);
//     }
// }

// const plusFunction = id => {
//     cart[id]["count"]++;
//     renderCart();
// }

// const minusFunction = id => {
//     if (cart[id]["count"]-1 == 0) {
//         deleteFunction(id)
//         return true
//     }
//     cart[id]["count"]--;
//     renderCart();
// }

// const deleteFunction = id => {
//     delete cart[id];
//     renderCart();
// }

// const renderCart = () => {
//     console.log(cart)
// }

// renderCart();