let menus = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function() {
    menus.classList.add("active");
})

closeBtn.addEventListener("click", function() {
    menus.classList.remove("active");
})


// SwiperJS code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    }
  });

//   Dynamic imgs

const sectionCenter = document.querySelector('.menu_items_container')
const filterBtns = document.querySelectorAll('.btn-cat');

filterBtns.forEach((btn) => {
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if(category === "all"){
            displayMenusItem(menu)
        }
        else{
            displayMenusItem(menuCategory)
        }
    })   
});

const menu = [
    {
        id: 1,
        title: "Chicken and Cashews",
        category: "Dinner",
        price: 25,
        img: './img/dinner1.jpeg'
    },
    {
        id: 2,
        title: "Baked Feta Pasta",
        category: "Dinner",
        price: 25,
        img: './img/dinner2.jpg'
    },
    {
        id: 3,
        title: "Beef Burrito",
        category: "Dinner",
        price: 25,
        img: './img/dinner3.jpg'
    },
    {
        id: 4,
        title: " Italian Chopped Salad",
        category: "Lunch",
        price: 25,
        img: './img/lunch1.webp'
    },
    {
        id: 5,
        title: "Korean Beef Meal",
        category: "Lunch",
        price: 25,
        img: './img/lunch2.jpg'
    },
    {
        id: 6,
        title: "Thai Chicken and Cucumber Salad",
        category: "Lunch",
        price: 25,
        img: './img/lunch3.jpg'
    },
    {
        id: 7,
        title: "Margarita Cocktail",
        category: "Drinks",
        price: 25,
        img: './img/drink1.png'
    },
    {
        id: 8,
        title: "Classic Mudslide",
        category: "Drinks",
        price: 25,
        img: './img/drink2.png'
    },
    {
        id: 9,
        title: "Paloma cocktail",
        category: "Drinks",
        price: 25,
        img: './img/drink3.jpg'
    },
]

window.addEventListener("DOMContentLoaded", function() {
    displayMenusItem(menu);
});

function displayMenusItem(menuItem) {
    let displayMenusItem = menuItem.map((item) => {
        return `<div class="img_cards">
        <img src=${item.img} alt=${item.title}>
        <p class="price">Only on ${item.price} Dollars</p>
        <p>${item.title}</p>
    </div>`
    })
    displayMenusItem = displayMenusItem.join("");
    sectionCenter.innerHTML = displayMenusItem;
}

// Static counter animation

const counterEl = document.querySelectorAll(".num");

counterEl.forEach((item) => {
    item.innerText = "0";
    incrementCounter();

    function incrementCounter(){
        let currentNum = +item.innerText;
        const dataCeil = item.getAttribute("data-ceil");
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);

        if(currentNum < dataCeil){
            item.innerText = currentNum;
            setTimeout(incrementCounter, 200)
        }else {
            item.innerHTML = dataCeil;
        }
    }
})