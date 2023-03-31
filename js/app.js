let products = [
    {
        name:"Product One",
        price:3.50,
        image_url:"/images/product1.jpg",
        description:"This is product one, it's great",
    },
    {
        name:"Product Two",
        price:2.50,
        image_url:"/images/product2.jpg",
        description:"This is product two, it's good",
    },
    {
        name:"Product Three",
        price:1.50,
        image_url:"/images/product3.jpg",
        description:"This is product three, it's okay",
    },
]


let product_container = document.querySelector(`#product_container`);
for(let i=0; i<products.length; i++) {
    product_container.insertAdjacentHTML(`beforeend`, 
        `<div class="product">
            <h3>${products[i][`name`]}</h3>
            <img src="${products[i][`image_url`]}" />
            <p>${products[i][`description`]}</p>
            <h6>${products[i][`price`]}$</h6>
            
            <button product_name="${products[i][`name`]}" 
                product_price="${products[i][`price`]}" 
                product_description="${products[i][`description`]}" 
                product_image_url="${products[i][`image_url`]}">
            ADD
            </button>

        </div>`
    );
}

function select_product(details) {
    let selected = {
        name: details[`target`].getAttribute(`product_name`),
        image_url: details[`target`].getAttribute(`product_image_url`),
        description: details[`target`].getAttribute(`product_description`),
        price: details[`target`].getAttribute(`product_price`),
    }
    let selected_json = JSON.stringify(selected);
    Cookies.set(`product_selected`, selected_json);
}

let product_buttons = document.querySelectorAll(`.product`);
for(let i=0; i<product_buttons.length; i++) {
    product_buttons[i].addEventListener(`click`, select_product);
}