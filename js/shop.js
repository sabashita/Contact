
//get tehe DOM objects
const displayPic = document.getElementById("displayPic");
const showImg = document.getElementById("showImg");
const displayClose = document.getElementById("displayClose");

//get the DOM objects by all elements of name of class and tag of imgs
document.querySelectorAll(".displayImg").forEach(img =>{

    //creating eventListener binding onclick event
    img.addEventListener("click",() =>{

        displayPic.style.display = "block";
        displayPic.style.display = "flex";
        showImg.src = img.src;// transit the src of image

    });
});

//creating eventListener binding onclick event
displayClose.addEventListener("click", () =>{
    displayPic.style.display = "none";
});

//get the DOM objects by all elements of name of class and tag of buttons
document.querySelectorAll(".addToCart").forEach(button =>{

    //creating eventListener binding onclick event
    button.addEventListener("click",(e) => {
        //get the closest parents tag of ".shop-col"
        var shop = e.target.closest(".shop-col");
        //get the DOM object id
        let shopId = shop.dataset.id;
        alert(`Added ${shopId} to the cart`);

        const id = shopId;
        const name = shop.dataset.name;
        const unitPrice = Number(shop.dataset.price);
        const image = shop.dataset.image;
        // named lineTotal because using "lineTotal" in the cart.html to display the price
        // init to 0 for temp, no use for
        const lineTotal = 0; 

        let cart = readCart();//reading from the storage
        const idx = cart.findIndex(it => it.id === id);
        if (idx >= 0) {
            cart[idx].qty += 1;
        } else {
            cart.push({ id, name, unitPrice, qty:1, image ,lineTotal});
        }
        writeCart(cart);

        // Update the item card's qty badge

        const card = btn.closest('.souvenir-item');
        if (card) {
            const badge = card.querySelector('.qty-badge');
            if (badge) {
                const item = cart.find(it => it.id === id);
                badge.textContent = item ? `Qty: ${item.qty}` : '';
            }
        }
    })
});

//this key links the shop to the cart

const CART_KEY = 'museumCartV1';


// This function reads the Cart information and write it to JSON  
function readCart() {
    try { 
        return JSON.parse(localStorage.getItem(CART_KEY)) || []; 
    }catch { 
        return []; 
    }
}

function writeCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/*This function is called by the addToCart button the first part reads the dataset contined in the buttons and asssigns the values to variables */

// function addToCart(btn) {
//     const id = btn.dataset.id;
//     const name = btn.dataset.name;
//     const unitPrice = Number(btn.dataset.price);
//     const image = btn.dataset.image;

// /* This part puts all of the individual items and puts them into an object called cart and writes it to LocalStorage   */

//     let cart = readCart();
//     const idx = cart.findIndex(it => it.id === id);
//     if (idx >= 0) {
//     cart[idx].qty += 1;
//     } else {
//     cart.push({ id, name, unitPrice, qty: 1, image });
//     }
//     writeCart(cart);

//     // Update the item card's qty badge

//     const card = btn.closest('.souvenir-item');
//     if (card) {
//     const badge = card.querySelector('.qty-badge');
//     if (badge) {
//         const item = cart.find(it => it.id === id);
//         badge.textContent = item ? `Qty: ${item.qty}` : '';
//     }
//     }
// }

