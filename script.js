//Move main banners
let bannerOne = document.getElementById('banner1');
let bannerTwo = document.getElementById('banner2');
let bannerThree = document.getElementById('banner3');

function showBanner2(){
    bannerOne.style.display = 'none';
    bannerTwo.style.display = 'block';
    bannerThree.style.display = 'none';
};
function showBanner3(){
    bannerOne.style.display = 'none';
    bannerTwo.style.display = 'none';
    bannerThree.style.display = 'block';
};
function showBanner1(){
    bannerOne.style.display = 'block';
    bannerTwo.style.display = 'none';
    bannerThree.style.display = 'none';    
};
bannerOne.onclick = showBanner2;
bannerTwo.onclick = showBanner3;
bannerThree.onclick = showBanner1;

let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
arrowLeft.onclick = showBanner3;
arrowRight.onclick = showBanner2;

//Order form

let orderFormButton = document.getElementById('order');
let formData = document.getElementById('form');

function showOrderForm(){
    formData.style.display = 'block';
};
orderFormButton.onclick = showOrderForm;

let closeOrder = document.querySelector('.uil-multiply');

function hideOrderForm(){
    formData.style.display = 'none'
};
closeOrder.onclick = hideOrderForm;

//Show and hide img caption

let bouquetName = document.getElementById('bouquet-name');
let bouquetCaption = document.getElementById('bouquet-caption');

function showCaption() {
    bouquetCaption.style.display = 'block';
};
function hideCaption() {
    bouquetCaption.style.display = 'none';
}
bouquetName.onmouseover = showCaption;
bouquetName.onmouseleave = hideCaption;

//Add to favourite

let blackheart = document.getElementById('blackheart'); 
let pinkheart = document.getElementById('pinkheart');

function addToFavourite(){
    blackheart.style.display = 'none';
    pinkheart.style.display = 'block';
}

function removeFromFavourite(){
    pinkheart.style.display = 'none';
    blackheart.style.display = 'block';
}

blackheart.onclick = addToFavourite;
pinkheart.onclick = removeFromFavourite







