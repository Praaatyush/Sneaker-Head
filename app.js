const wrapper = document.querySelector(".sliderWrapper");
/*
console.log(wrapper)

wrapper.style.transform = "translateX(-100vw)"
*/
const products= [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        color: 
        [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",

            },
        ],

    },
    {
        id: 2,
        title: "Jordan",
        price: 149,
        color: 
        [
            {
                code: "lightgrey",
                img: "./img/jordan.png",
            },
            {
                code: "darkblue",
                img: "./img/jordan2.png",

            },
        ],
    },
    { 
        id: 3,
        title: "AIR",
        price: 99,
        color: [
            {
                code: "grey",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",

            },
        ],
    },
    {
        id: 4,
        title: "Blazer",
        price: 119,
        color: [
            {
                code: "lightgrey",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",

            },
        ],
    },
   
    {
        id: 5,
        title: "Crater",
        price: 129,
        color: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgrey",
                img: "./img/crater2.png",

            },
        ],
    },
];

let chosenProduct = products[0]
const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item,index) => {
    //change the chosen product
    item.addEventListener("click",() => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
        //change the chosen product
        chosenProduct = products[index];

        //chnage text of currentProductSizes
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.color[0].img;

        //assign colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.color[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click",()=>{
        currentProductImg.src = chosenProduct.color[index].img
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
})
close.addEventListener("click",()=>{
    payment.style.display="none";
})
