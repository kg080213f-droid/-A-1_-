window.onload = function(){

/* 메뉴 */

const mainMenu = document.querySelector(".mainMenu");
const subMenu = document.querySelector(".subMenu");

mainMenu.addEventListener("mouseenter", function(){
subMenu.style.display="flex";
});

mainMenu.addEventListener("mouseleave", function(){
subMenu.style.display="none";
});


/* 슬라이드 */

let slideIndex = 0;
const slide = document.querySelector(".imgSlide");

setInterval(function(){

slideIndex++;

slide.style.transition="left 0.5s";
slide.style.left = (-1200 * slideIndex) + "px";

if(slideIndex >= 2){

setTimeout(function(){

slide.style.transition="none";
slide.style.left="0px";
slideIndex=0;

},500)

}

},3000);

},500

/* 탭메뉴 */

const tab = document.querySelectorAll(".tabMenu > li");

tab.forEach(function(el){

el.addEventListener("click",function(){

tab.forEach(function(li){
li.classList.remove("active");
})

this.classList.add("active");

})

});


/* 팝업 */

const popupBtn = document.querySelector(".popup");
const modal = document.querySelector("#modalWrap");
const close = document.querySelector(".btn");

popupBtn.addEventListener("click",function(e){
e.preventDefault();
modal.classList.add("active");
});

close.addEventListener("click",function(){
modal.classList.remove("active");
});

