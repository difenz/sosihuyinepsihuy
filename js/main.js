filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var btn = document.querySelectorAll("a.modal-button");

var modals = document.querySelectorAll(".modal");

var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  };
}

for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};


// const addToCart = document.querySelector('[data-action="addToCart"]');

const addToCart = document.querySelectorAll('.btn');

for (let addto of addToCart) {
  addto.addEventListener('click', function() {
    addto.innerHTML = 'Добавлено';
    addto.style.background = '#26c281';
    addto.style.color = 'white';
      setTimeout(function(){
        addto.innerHTML = 'Добавить в корзину';
        addto.style.background = '';
        addto.style.color = '';
    },1000);
  })
}

addToCart.onclick = function () {
  addToCart.innerHTML = 'Добавлено';
    addToCart.style.background = 'green';
    addToCart.style.color = 'white';
      setTimeout(function(){
        addToCart.innerHTML = 'Добавить в корзину';
        addToCart.style.background = '';
        addToCart.style.color = '';
    },1000);
}



// addToCart.addEventListener('click', function() {
//   addToCart.innerHTML = 'Добавлено';
//   addToCart.style.background = 'green';
//   addToCart.style.color = 'white';
//     setTimeout(function(){
//       addToCart.innerHTML = 'Добавить в корзину';
//       addToCart.style.background = '';
//       addToCart.style.color = '';
//   },1000);
// })


