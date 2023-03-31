let selected_json = Cookies.get(`product_selected`);
let product_container = document.querySelector(`#product_container`);

if(selected_json === undefined) {
    product_container.insertAdjacentHTML(`beforeend`, `<h3>NOTHING SELECTED</h3>`)
} else {
    let product = JSON.parse(selected_json);
    product_container.insertAdjacentHTML(`beforeend`, 
        `<div class="product">
            <h3>${product[`name`]}</h3>
            <img src="${product[`image_url`]}" />
            <p>${product[`description`]}</p>
            <h6>${product[`price`]}$</h6>
        </div>`
    );
}