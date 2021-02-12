const pricing = {
    1: { views: "10K", price: 8 },
    2: { views: "50K", price: 12 },
    3: { views: "100K", price: 16 },
    4: { views: "500K", price: 24 },
    5: { views: "1M", price: 36 },
};

const discount = 0.75;

const getViews = function () {
    return pricing[slider.value]["views"];
};

const getPrice = function () {
    if (!toggle.checked) {
        return `${pricing[slider.value]["price"]}.00`;
    } else {
        return `${pricing[slider.value]["price"] * discount}.00`;
    }
}

const displayViews = function () {
    let views = document.querySelector('#viewNumber');
    views.innerText = getViews();
}

const displayPrice = function () {
    let price = document.querySelector('#price');
    price.innerHTML = getPrice();
}

const toggle = document.querySelector('#optionToggle');
toggle.addEventListener('input', (e) => {
    displayViews();
    displayPrice();
})

const slider = document.querySelector('#priceSlider');
slider.addEventListener('input', (e) => {
    displayViews();
    displayPrice();
})

window.onload = () => {
    displayViews();
    displayPrice();
};



