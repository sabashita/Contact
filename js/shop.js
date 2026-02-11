
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
        let shopId = shop.id;
        alert(`Added ${shopId} to the cart`);
    })
});