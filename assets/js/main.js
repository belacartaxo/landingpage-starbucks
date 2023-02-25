const imgs = document.querySelectorAll('.coffee-icons img');
const mainImg = document.querySelector('.main-content .img img');
const circle = document.querySelector('.circle');

imgs[0].addEventListener('click', ()=>{
    changeImg(mainImg, 'assets/img/stbgreen-g.png');
    changeColor(circle, '#025939');
    
})

imgs[1].addEventListener('click', ()=>{
    changeImg(mainImg, 'assets/img/stbcoral-g.png');
    changeColor(circle, '#F279A6');
})

imgs[2].addEventListener('click', ()=>{
    changeImg(mainImg, 'assets/img/stbpink-g.png');
    changeColor(circle, '#E366BC');
})

function changeImg(img, src){
    img.src =src;
}

function changeColor(el, color){
    el.style.backgroundColor = color;
}