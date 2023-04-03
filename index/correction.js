const menu = [
    {
        id : 1,
        title : "buttermilk pancakes",
        category : "breakfast",
        price: 10.99,
        img : "../images/butter-pancake.jpeg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 2,
        title : "chocolate pancakes",
        category : "lunch",
        price: 13.39,
        img : "../images/choco-pancake.jpeg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 3,
        title : "strawberry pancakes",
        category : "breakfast",
        price: 15.89,
        img : "../images/straw-pancake.jpeg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 4,
        title : "potato pancakes",
        category : "breakfast",
        price: 12.09,
        img : "../images/potato-pancake.jpeg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 5,
        title : "fluffy pancakes",
        category : "lunch",
        price: 15.59,
        img : "../images/fluffy-pancake.jpeg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 6,
        title : "mixed-fruit pancakes",
        category : "breakfast",
        price: 9.79,
        img : "../images/mixed-pancake.jpeg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 7,
        title : "honey pancakes",
        category : "lunch",
        price: 18.49,
        img : "../images/pancake-pour.jpeg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 8,
        title : "banana pancakes",
        category : "lunch",
        price: 16.29,
        img : "../images/banana-pancake.jpeg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 9,
        title : "Rainbow shakes",
        category : "shakes",
        price: 5.29,
        img : "../images/rain-shakes.jpg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 10,
        title : "vanilla shakes",
        category : "shakes",
        price: 10.29,
        img : "../images/vanilla-shakes.jpg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 11,
        title : "banana shakes",
        category : "shakes",
        price: 8.29,
        img : "../images/banana-shakes.jpg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 12,
        title : "combo shakes",
        category : "shakes",
        price: 25.29,
        img : "../images/combo-shakes.jpg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 13,
        title : "mint shakes",
        category : "shakes",
        price: 19.29,
        img : "../images/mint-shake.jpg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
    {
        id : 14,
        title : "strawberry shakes",
        category : "shakes",
        price: 9.99,
        img : "../images/straw-shakes.jpg",
        desc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab ipsa esse molestias nemo repellat iure optio modi, molestiae adipisci`,



    },
]

const wrapper = document.querySelector(".wrapper");
const orderMenu = document.querySelector(".order-menu");
const order = document.querySelector(".order-o")
const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");


order.addEventListener("click", function(){
    orderMenu.classList.add("active");
    wrapper.classList.add("active");

})


window.addEventListener("DOMContentLoaded", function (){
    displayMenuItems(menu)
    const categories = menu.map (function (item){
        return item.categories
    })
    console.log(categories);
    
});

filterBtns.forEach(function(btn){
    btn.addEventListener("click" , function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter (function (menuItem){
        // console.log(category)
        if (menuItem.category === category){
            return menuItem;
        }
        })
        if (category === "all"){
            displayMenuItems(menu)
        }
        else{
            displayMenuItems(menuCategory)
        }
        // console.log(category)
    })
    
})


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){

        // console.log(item)
        return `<article class="menu-item">
        <span><img src= ${item.img} alt=""></span>
        <div class="item-info">
            <div class="head">
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </div>
            <div class="item-text">
                <p>${item.desc}</p>
            </div>

        </div>
    </article>`
    })
    displayMenu = displayMenu.join("")
    // console.log(menuItems)
    sectionCenter.innerHTML = displayMenu

}

