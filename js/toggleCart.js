function toggleCartStatus () {
    const cartWrapper = document.querySelector(".cart-wrapper");
    const cartEmpty = document.querySelector("[data-cart-empty]")
    const orderForm = document.querySelector("#order-form")
    const total = document.querySelector(".cart-total")
    const title = document.querySelector(".card-title")


    if (cartWrapper.children.length > 0) {
        cartEmpty.classList.add('none');
        orderForm.classList.remove('none');
        total.classList.remove('none');
        title.classList.remove('none');
    } else {
        console.log("emplty")
    }
}