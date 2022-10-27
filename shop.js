

// shop create card from js 
var meals = 
[
    {
        id:1,
        category:"Salade",
        imgsrc :"./assets/images/shop/products/salade/salad1.png",
        price : "22.33 USD",
        content : "content 1",
        title:  "this is title pr1",
    },
    {
        id:2,
        category:"Salade",
        imgsrc :"./assets/images/shop/products/salade/salad2.png",
        price : "22.33 USD",
        content : "content 2",
        title:  "this is title pr2",
    },
    {
        id:3,
        category:"Salade",
        imgsrc :"./assets/images/shop/products/salade/salad4.png",
        price : "22.33 USD",
        content : "content 3",
        title:  "this is title pr3",
    },
    {
        id:4,
        category:"Obento",
        imgsrc :"./assets/images/shop/products/Obento/ob1.png",
        price : "22.33 USD",
        content : "content 4",
        title:  "this is title pr4",
    },
    {
        id:5,
        category:"Obento",
        imgsrc :"./assets/images/shop/products/Obento/ob2.png",
        price : "22.33 USD",
        content : "content 5",
        title:  "this is title pr5",
    },
    {
        id:6,
        category:"Obento",
        imgsrc :"./assets/images/shop/products/Obento/ob3.png",
        price : "22.33 USD",
        content : "content 6",
        title:  "this is title pr6",
    },
    {
        id:7,
        category:"Obento",
        imgsrc :"./assets/images/shop/products/Obento/ob4.png",
        price : "22.33 USD",
        content : "content 7",
        title:  "this is title pr7",
    },
    {
        id:8,
        category:"plats",
        imgsrc :"./assets/images/shop/products/plats/meal1.png",
        price : "22.33 USD",
        content : "content 8",
        title:  "this is title pr8",
    },
    {
        id:9,
        category:"plats",
        imgsrc :"./assets/images/shop/products/plats/meal2.png",
        price : "22.33 USD",
        content : "content 9",
        title:  "this is title pr9",
    },
    {
        id:10,
        category:"plats",
        imgsrc :"./assets/images/shop/products/plats/meal3.png",
        price : "22.33 USD",
        content : "content 10",
        title:  "this is title pr10",
    },
    {
        id:11,
        category:"plats",
        imgsrc :"./assets/images/shop/products/plats/meal4.png",
        price : "22.33 USD",
        content : "content 11",
        title:  "this is title pr11",
    },
    {
        id:12,
        category:"sushi",
        imgsrc :"./assets/images/shop/products/sushi/Ellipse 16.png",
        price : "22.33 USD",
        content : "content 12",
        title:  "this is title pr12",
    },
    {
        id:13,
        category:"sushi",
        imgsrc :"./assets/images/shop/products/sushi/Ellipse 19.png",
        price : "22.33 USD",
        content : "content 13",
        title:  "this is title pr13",
    },
    {
        id:14,
        category:"sushi",
        imgsrc :"./assets/images/shop/products/sushi/Ellipse 23.png",
        price : "22.33 USD",
        content : "content 14",
        title:  "this is title pr14",
    },
    {
        id:15,
        category:"sushi",
        imgsrc :"./assets/images/shop/products/sushi/Ellipse 25.png",
        price : "22.33 USD",
        content : "content 15",
        title:  "this is title pr15",
    },
]

var cartData =  JSON.parse(localStorage.getItem("cartitems") || "[]");
var itemList = document.querySelector(".item-list");
var totalPriceBtn = document.querySelector(".total-price-btn");
var menuCardsSection = document.querySelector(".menu-cards-section");



// window.localStorage.clear();
// var cartData = window.localStorage.getItem("cartItems");

function card  ( imgSrc ,price , content,title, itemid) 
{

    var item = ` 
    <div class="card card-${itemid}">
    <div class="top-card">
        <div class="card-img">
            <img src="${imgSrc}" alt="sushi 1">
        </div>
        <div class="card-content">
            <h3>${title}</h3>
            <p>${content}</p>
        </div>
    </div>
    <!-- top card end -->
    
    <div class="card-bottom">
        <div class="price">
            <h5>${price}</h5>
        </div>
        <div class="add-to-cart addtoCard-${itemid}" onclick="handleClick(${itemid})">
            <img src="./assets/icons/plus.svg" alt="plus icon">
        </div>
    </div>
   </div>
   `
 return item;
} 

function cartItem(numberItem, itemName, itemPrice,itemId){
    var item = 
    `   
    <div class="item " id="${itemId}">
        <div class="item-info">
            <div class="item-info-left">
                <h6 class="num-item">${numberItem}</h6>
                <p>${itemName}</p>
            </div>
            <h6 class="item-price">${itemPrice}</h6>
        </div>
        <div class="add-remove-item-icon">
            <div class="add-to-cart" onclick="increment(${itemId})">
                <img src="./assets/icons/plus.svg" alt="plus icon">
            </div>
            <div class="add-to-cart" onclick="decrement(${itemId})">
                <img src="./assets/icons/remove.svg"  alt="plus icon">
            </div>
        </div>
    </div>
    `
    return item ; 
};

function loadSomeCards(){

    for(var item =0 ; item < meals.length ; item++){
        const card3 = card(meals[item].imgsrc,meals[item].price,meals[item].content,meals[item].title,meals[item].id);
        menuCardsSection.innerHTML +=  card3;
    }
}

loadSomeCards();

function loadData(){
    var itemListContainer = document.querySelector(".item-list");
    var totall = 0.0;
    for(var cart in cartData){
        
        var itemX = cartItem(cartData[cart].number,cartData[cart].title,cartData[cart].price,cartData[cart].id);
        itemListContainer.innerHTML += itemX;
        totall += parseFloat(cartData[cart].price) * parseInt(cartData[cart].number);
        var totalPrice = document.getElementById("total-price");
        totalPrice.textContent  =totall.toFixed(2);
    }
    

}

loadData();



function increment(idItem)
{   
    console.log("increment to item "+idItem);
    cartData.forEach(element => {
        if(idItem==element.id){
            next = element.number +1;
            element.number =next;
            console.log(element.number);
            console.log(element.id);
            localStorage.setItem("cartitems", JSON.stringify(cartData));
            // event.preventDefault();
            // e.preventDefault();
            location.reload();
            // refershDiv();
        }
    });
}


function refershDiv(){
    $("#cart-items-refersh").load(location.href+"#cart-items-refersh");
}
function decrement(idItem)
{

    console.log("decrement to item "+idItem);
    cartData.forEach(element => {
        if(idItem==element.id){
            if(element.number >  1)
            {
                next = element.number -1;
                element.number =next;
                console.log(element.number);
                console.log(element.id);
                localStorage.setItem("cartitems", JSON.stringify(cartData));
                // event.preventDefault();
                // e.preventDefault();
                location.reload();
                // refershDiv();
            }else
            {   
                const filteredCartItems = cartData.filter(element => element.id !== idItem);
                cartData = filteredCartItems;
                localStorage.setItem("cartitems", JSON.stringify(cartData));
                // event.preventDefault();
                // e.preventDefault();
                location.reload();
                // refershDiv();
            }
            
        }
    });
}




function  handleClick(id){
    var total = 0.0;
    var foundId = -1;
    var mealpos = -1;
    for(var item in meals){
        if(meals[item].id == id)
        {  
            foundId = id ;
            mealpos = item;
        }
    }
    if(foundId != -1){
            console.log("products exists");
            if(cartData.length==0){
                itemJson = {number:1, title: meals[mealpos].title, price: meals[mealpos].price, id:meals[mealpos].id};
                cartData.push(itemJson);
                localStorage.setItem("cartitems", JSON.stringify(cartData));
            }
            else{
                var foundItemCart = -1;
                for(var i =0 ; i< cartData.length ; i++){
                    if(cartData[i].id == id){
                        console.log("you need to add price here");
                        cartData[i].number  =+cartData[i].number+  1;
                        foundItemCart = i;
                        break ;
                    }
                }
                if(foundItemCart == -1){
                    var itemJson = {number:1, title: meals[mealpos].title, price: meals[mealpos].price, id:meals[mealpos].id};
                    cartData.push(itemJson);
                    var idPr = meals[mealpos].id;
                    // save cart items to localStorage 
                    localStorage.setItem("cartitems", JSON.stringify(cartData));
                    // console.log(window.localStorage);
                }
            }
    }
    console.log(cartData);
    var itemListContainer = document.querySelector(".item-list");
    itemListContainer.innerHTML = "";
    for(var cart in cartData){
        var itemX = cartItem(cartData[cart].number,cartData[cart].title,cartData[cart].price,cartData[cart].id);
        itemListContainer.innerHTML += itemX;
        total += parseFloat(cartData[cart].price) * parseInt(cartData[cart].number);
    }
    var allitems = document.getElementsByClassName("item-price");
    var numItems = document.getElementsByClassName("num-item");
    var totalPrice = document.getElementById("total-price");
    totalPrice.textContent  =total.toFixed(2);
}


//handClick end function 

var categorySect = document.querySelector("#category-select");

categorySect.addEventListener("change",()=>{
    var value = categorySect.value;
    var text = categorySect.options[categorySect.selectedIndex].text;
    menuCardsSection.innerHTML = "";
    for(var item in meals){
        const card3 = card(meals[item].imgsrc,meals[item].price,meals[item].content,meals[item].title,meals[item].id);
        if(meals[item].category === text){
            console.log(text);
            menuCardsSection.innerHTML +=  card3;
        }
    }
});




var btnTotal = document.querySelector(".total-price-btn");
var btnDone = document.querySelector(".place-order-btn");



var xx = document.querySelector(".place-order-card-container");
xx.style.display ="none";

btnDone.addEventListener("click", ()=>{
    xx.style.display ="none";
    console.log("remove me ");
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function toggleMenu() {
    var x = document.querySelector(".place-order-card-container");
    if (x.style.display === "block") {
        await sleep( 300);
        x.style.display = "none";
    } else {
        await sleep( 300);
        x.style.display = "block";
    }
}


window.onclick = function() {
    // toggleMenu();
}

btnTotal.addEventListener("click",()=> toggleMenu());


// contact validation 


// $(".total-price-btn").click(function(){
//     $(".place-order-card-container").show('fast');
//   });
