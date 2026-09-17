let foods = [
    {
        id: 1,
        name: "Pizza",
        price: 199,
        category: "pizza",
        image: "https://www.sipandfeast.com/wp-content/uploads/2026/02/bar-pizza-recipe-snippet-500x500.jpg"
    },
    {
        id: 2,
        name: "Burger",
        price: 149,
        category: "burger",
        image: "https://static01.nyt.com/images/2025/07/25/multimedia/kla-diner-style-burger-fkmj/kla-diner-style-burger-fkmj-mediumSquareAt3X.jpg"
    },
    {
        id: 3,
        name: "Chicken",
        price: 249,
        category: "chicken",
        image: "https://www.thecookierookie.com/wp-content/uploads/2024/02/bbq-chicken-wings-recipe-featured-image.jpg"
    },
    {
        id: 4,
        name: "abjbj",
        price: 155,
        category: "pizza",
        image: "https://static01.nyt.com/images/2025/07/25/multimedia/kla-diner-style-burger-fkmj/kla-diner-style-burger-fkmj-mediumSquareAt3X.jpg"
    },
    {
        id: 5,
        name: "bbbbb",
        price: 299,
        category: "burger",
        image: "https://static01.nyt.com/images/2025/07/25/multimedia/kla-diner-style-burger-fkmj/kla-diner-style-burger-fkmj-mediumSquareAt3X.jpg"
    },
    {
        id: 6,
        name: "ccccc",
        price: 349,
        category: "chicken",
        image: "https://static01.nyt.com/images/2025/07/25/multimedia/kla-diner-style-burger-fkmj/kla-diner-style-burger-fkmj-mediumSquareAt3X.jpg"
    },
];


let foodContainer = document.querySelector("#foodContainer");

let cartContainer = document.querySelector("#cartContainer");

let searchInput = document.querySelector("#searchInput");

let categoryButtons = document.querySelectorAll(".category");

let total = document.querySelector("#total");

let orderButton = document.querySelector("#orderButton");

let orderStatus = document.querySelector("#orderStatus");

let orderDate = document.querySelector("#orderDate");

let cart = [];

function displayFoods(foodList) {

    foodContainer.innerHTML = "";

    foodList.forEach(function (food) {

        foodContainer.innerHTML += `
            <div class="foodCard">

                <img src="${food.image}" alt="${food.name}">

                <h3>${food.name}</h3>

                <p>${food.price}</p>

                <button onclick="addToCart(${food.id})">
                    Add
                </button>

            </div>`
            ;
    });
}

displayFoods(foods);

searchInput.addEventListener("input", function () {

    let search = searchInput.value.toLowerCase();

    let filteredFoods = foods.filter(function (food) {

        return food.name.toLowerCase().includes(search);

    });

    displayFoods(filteredFoods);

});


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        let category = button.textContent.toLowerCase();

        if (category === "all") {

            displayFoods(foods);

            return;
        }

        let filteredFoods = foods.filter(function (food) {

            return food.category === category;

        });

        displayFoods(filteredFoods);

    });

});

function addToCart(id) {

    let existingItem = cart.find(function (item) {

        return item.id === id;

    });

    if (existingItem) {

        existingItem.quantity++;

    } else {

        let product = foods.find(function (food) {

            return food.id === id;

        });

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            quantity: 1

        });
    }


    displayCart();

    calculateTotal();
}

function displayCart() {

    cartContainer.innerHTML = "";

    cart.forEach(function (item) {

        cartContainer.innerHTML += `
            <div class="cartItem">

                <p>
                    ${item.name} - ₹${item.price}
                </p>

                <button onclick="decreaseQuantity(${item.id})">
                    -
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button onclick="increaseQuantity(${item.id})">
                    +
                </button>

                <button onclick="removeFromCart(${item.id})">
                    Remove
                </button>

            </div>
        `;
    });
}

function increaseQuantity(id) {

    let item = cart.find(function (item) {

        return item.id === id;

    });

    item.quantity++;

    displayCart();

    calculateTotal();
}


function decreaseQuantity(id) {

    let item = cart.find(function (item) {
        return item.id === id;
    });

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(function (item) {
            return item.id !== id;
        });
    }

    displayCart();
    calculateTotal();
}

function removeFromCart(id) {

    cart = cart.filter(function (item) {

        return item.id !== id;

    });

    displayCart();

    calculateTotal();
}

function calculateTotal() {

    let totalPrice = 0;

    cart.forEach(function (item) {

        totalPrice = totalPrice + (item.price * item.quantity);

    });

    total.textContent = "Total: ₹" + totalPrice;
}

orderButton.addEventListener("click", function () {

    if (cart.length === 0) {
        orderStatus.textContent = "Status: Cart is empty";
        return;
    }

    let date = new Date();

    orderDate.textContent = "Order Date: " + date.toLocaleString();

    orderStatus.textContent = "Status: Pending...";

    let order = new Promise(function (resolve) {

        setTimeout(function () {
            resolve("Status: Order Placed!");
        }, 3000);

    });

    order.then(function (message) {

        orderStatus.textContent = message;
        alert("Order has been placed!");

        setTimeout(function () {
            orderStatus.textContent = "Status: Order Delivered!";
        }, 5000);

    });
});