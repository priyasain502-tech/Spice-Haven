

AOS.init({
duration:1200
});

/* Loader */

// window.addEventListener("load",()=>{

// setTimeout(()=>{
// document.querySelector(".loader").style.display="none";
// },1500)

// })

setTimeout(() => {
    const loader = document.querySelector(".loader");
    if(loader){
        loader.style.display = "none";
    }
}, 1500);
/* Mobile Menu */

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menuBtn.onclick=()=>{
nav.classList.toggle("active");
}

/* Dark Mode */

const darkBtn=document.querySelector(".dark-toggle");

// darkBtn.onclick=()=>{
// document.body.classList.toggle("dark");
// }

function DarkLightmode(){
    // console.log(document.body)
  document.body.classList.toggle("dark");  
}


/* Scroll Progress */

window.addEventListener("scroll",()=>{

let winScroll=
document.documentElement.scrollTop;

let height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

let scrolled=
(winScroll/height)*100;

document.querySelector(".progress-bar")
.style.width=scrolled+"%";

});


/* Counter Animation */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=
+counter.getAttribute("data-target");

const count=
+counter.innerText;

const increment=
target/200;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,10);

}else{
counter.innerText = target;
}

}

updateCounter();

});

/* MENU FILTER */

const filterBtns =
document.querySelectorAll(".filter-btn");

const cards =
document.querySelectorAll(".food-card");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelector(".filter-btn.active")
.classList.remove("active");

btn.classList.add("active");

const filter =
btn.dataset.filter;

cards.forEach(card=>{

if(
filter === "all" ||
card.dataset.category === filter
){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

});

/* SEARCH FOOD */

const searchInput =
document.getElementById("searchFood");

searchInput.addEventListener("keyup",()=>{

let value =
searchInput.value.toLowerCase();

cards.forEach(card=>{

let title =
card.querySelector("h3")
.innerText
.toLowerCase();

if(title.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

/* ADD TO CART */

document
.querySelectorAll(".cart-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerText="Added ✓";

setTimeout(()=>{
btn.innerText="Add";
},1500);

});

});


/* =====================
TESTIMONIAL SLIDER
===================== */

const slides =
document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showSlide(){

slides.forEach(slide=>{
slide.classList.remove("active-slide");
});

slides[currentSlide]
.classList.add("active-slide");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

}

setInterval(showSlide,3000);


/* =====================
LIGHTBOX
===================== */

const galleryImages =
document.querySelectorAll(".gallery-img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox-img");

const closeLightbox =
document.querySelector(".close-lightbox");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

closeLightbox.onclick=()=>{

lightbox.style.display="none";

};

/* =====================
BACK TO TOP
===================== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

});

topBtn.onclick=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

};

/* =====================
RESERVATION
===================== */

document
.querySelector(".reservation-form")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Table Reserved Successfully!"
);

});

/* =====================
FEATURES
===================== */

let feature = [
    {
        "icon" : "fas fa-utensils",
        "title" : "Pure Vegetarian"
    },

    {
        "icon" : "fas fa-truck",
        "title" : "Home Delivery"
    },

    {
        "icon" : "fas fa-birthday-cake",
        "title" : "Birthday Parties"
    },

    {
        "icon" : "fas fa-users",
        "title" : "Corporate Events"
    },

    {
        "icon" : "fas fa-hands-wash",
        "title" : "Hygienic Kitchen"
    },

    {
        "icon" : "fas fa-concierge-bell",
        "title" : "Catering Service"
    },

]

let mainclass = document.querySelector(".features-grid");

if(mainclass){
    mainclass.innerHTML = feature.map((item)=>{
        return `
        <div class="feature-card glass">
            <i class="${item.icon}"></i>
            <h3>${item.title}</h3>
        </div>
        `;
    }).join("");
}



/* =====================
CERTIFICATES
===================== */

let Certificates = [
    {
        icons: "fas fa-certificate",
        heading: "FSSAI Certified"
    },
    {
        icons: "fas fa-award",
        heading: "Food Safety Award"
    },
    {
        icons: "fas fa-certificate",
        heading: "Food Safety Award"
    },
    {
        icons: "fas fa-shield-alt",
        heading: "Hygiene Certificate"
    },
    {
        icons: "fas fa-certificate",
        heading: "FSSAI Certified"
    },
    {
        icons: "fas fa-star",
        heading: "Customer Choice Award"
    }
];

let awards = document.querySelector(".certificate-grid");

awards.innerHTML = Certificates.map((item) => {
   return  `

    <div class="certificate-card">
                <i class="${item.icons}"></i>
                <h3>${item.heading}</h3>
            </div>`
}).join("");




//    <!-- MENU SECTION -->

let FoodMenu = [
    {
        "img" : "./images/special-menu-imgs/special-menu-1.jpg",
        "foodtitle" : "Butter Paneer",
        "details" : "Creamy tomato gravy with paneer cubes",
        "vegbutn" : "VEG",
        "foodprice" : 249,
         "catagory" : "north"
    },
    {
        "img" : "./images/special-menu-imgs/special-menu-2.jpg",
        "foodtitle" : "Dal Makhani",
        "details" : "Rich black lentils cooked overnight",
        "vegbutn" : "VEG",
         "foodprice" : 199,
          "catagory" : "north"
    },
    {
        "img" : "./images/special-menu-imgs/special-menu-3.jpg",
        "foodtitle" : "Masala Dosa",
        "details" : "Crispy dosa with potato masala.",
        "vegbutn" : "VEG",
         "foodprice" : 149,
          "catagory" : "south"
    },
    {
        "img" : "./images/special-menu-imgs/special-menu-4.jpg",
        "foodtitle" : "Pav Bhaji",
        "details" : "Mumbai style buttery pav bhaji. buttery pav bhaji.",
        "vegbutn" : "VEG",
         "foodprice" : 179,
         "catagory" : "fastfood"
         
    }
];

let food = document.querySelector(".menu-grid")
food.innerHTML = FoodMenu.map((item)=>{
    return `
  <div class="food-card" data-category="${item.catagory}">
                <span class="veg-badge">${item.vegbutn}</span>

                <img src="${item.img}">

                <div class="food-content">
                    <h3>${item.foodtitle}</h3>
                    <p>${item.details}</p>
                    

                    <div class="food-bottom">
                        <span>₹${item.foodprice}</span>
                        <button class="cart-btn">
                            Add
                        </button>
                    </div>
                </div>
            </div>
    
    
    `
}) .join("");



// CHEF SECTION //


let chefsintro = [
    {
        "chefimg" : "./images/chefs-imgs/chef-1.jpg",
        "chefName" : "Rajesh Sharma",
        "title"  : "Head Chef",
        "experience" : "20+ Years Experience"

    },
    {
        "chefimg" : "./images/chefs-imgs/chef-2.jpg",
        "chefName" : "Amit Verma",
        "title"  : "sous Chef",
        "experience" : "15+ Years Experience"

    },  
    {
        "chefimg" : "./images/chefs-imgs/chef-3.jpg",
        "chefName" : "sanjeev Kapoor",
        "title"  : "Pastry Chef",
        "experience" : "12+ Years Experience"


    }
];


let chef = document.querySelector(".chef-grid") 
chef.innerHTML = chefsintro.map((item)=>{
    return `
     
    <div class="chef-card">
                <img src="${item.chefimg}">
                <h3>${item.chefName}</h3>
                <h4>${item.title}</h4>
                <p>${item.experience}</p>
                <p>Specialist in North Indian Cuisine</p>
            </div>
    
    `
}) .join("");


        




    










