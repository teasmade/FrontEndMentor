console.log("Hello Bonjour World");

const toggle = document.querySelector('#optionToggle');

toggle.addEventListener('click', (e) => {
    console.log(toggle.checked);
})

const slider = document.querySelector('#priceSlider');


slider.addEventListener('input', (e) => {
    console.log(slider.value);
    let views = document.querySelector('#viewNumber');
    views.innerText = `${slider.value}`;
})

const pricing = {
    1: { views: "10K", price: 8 },
    2: { views: "50K", price: 12 },
    3: { views: "100K", price: 16 },
    4: { views: "500K", price: 24 },
    5: { views: "1M", price: 36 },
};

console.log(pricing[1]["price"]);