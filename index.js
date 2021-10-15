const answer04 = document.querySelector(".answer__para--4");
const answer03 = document.querySelector(".answer__para--3");
const answer02 = document.querySelector(".answer__para--2");
const answer01 = document.querySelector(".answer__para--1");
const question04 = document.querySelector(".question__heading--4");
const question03 = document.querySelector(".question__heading--3");
const question02 = document.querySelector(".question__heading--2");
const question01 = document.querySelector(".question__heading--1");
const angleDown04 = document.querySelector(".angle-down--4");
const angleDown03 = document.querySelector(".angle-down--3");
const angleDown02 = document.querySelector(".angle-down--2");
const angleDown01 = document.querySelector(".angle-down--1");
const feature01 = document.querySelector(".feaure__select--para01");
const feature02 = document.querySelector(".feaure__select--para02");
const feature03 = document.querySelector(".feaure__select--para03");
const feature__one = document.querySelector(".feature__one");
const feature__two = document.querySelector(".feature__two");
const feature__three = document.querySelector(".feature__three");
const barBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times")
const mobleNav = document.querySelector(".mobile__nav");
const footerInput = document.querySelector(".footer__input");
const footerBtn = document.querySelector(".footer__btn")


barBtn.addEventListener("click", ()=>{
    barBtn.classList.add("hide")
    mobleNav.classList.toggle("show")
  
});

closeBtn.addEventListener("click", ()=>{
    
    
    
    barBtn.classList.remove("hide")
    mobleNav.classList.toggle("show")
    
})

question04.addEventListener("click", ()=>{
    
    answer04.classList.toggle("show");
    angleDown04.classList.toggle("fa-angle-up");
    angleDown04.classList.toggle("red");
    angleDown03.classList.remove("red");
    angleDown02.classList.remove("red");
    angleDown01.classList.remove("red");
    answer03.classList.remove("show");
    answer02.classList.remove("show");
    answer01.classList.remove("show")
    
})

question03.addEventListener("click", ()=>{
    
    answer03.classList.toggle("show")
    angleDown03.classList.toggle("fa-angle-up")
    angleDown03.classList.toggle("red")
    angleDown04.classList.remove("red");
    angleDown02.classList.remove("red");
    angleDown01.classList.remove("red");
    answer04.classList.remove("show");
    answer02.classList.remove("show");
    answer01.classList.remove("show")
})

question02.addEventListener("click", ()=>{
    
    answer02.classList.toggle("show");
    angleDown02.classList.toggle("fa-angle-up");
    angleDown02.classList.toggle("red");
    angleDown03.classList.remove("red");
    angleDown04.classList.remove("red");
    angleDown01.classList.remove("red");
    answer03.classList.remove("show");
    answer04.classList.remove("show");
    answer01.classList.remove("show")
})

question01.addEventListener("click", ()=>{
    
    answer01.classList.toggle("show");
    angleDown01.classList.toggle("fa-angle-up");
    angleDown01.classList.toggle("red");
    angleDown03.classList.remove("red");
    angleDown02.classList.remove("red");
    angleDown04.classList.remove("red");
    answer03.classList.remove("show");
    answer02.classList.remove("show");
    answer04.classList.remove("show")
})


feature01.addEventListener("click", ()=>{
    feature__two.classList.remove("show01");
    feature__three.classList.remove("show01");
    feature__one.classList.add("row")
    feature__one.classList.remove("hide")
    $(".feaure__select--para03").removeClass("p_yes_after")
    $(".feaure__select--para02").removeClass("p_yes_after")
    $(".feaure__select--para01").addClass("p_yes_after")
})

feature02.addEventListener("click", ()=>{
    
    feature__two.classList.toggle("show01");
    feature__three.classList.remove("show01");
    feature__one.classList.add("hide")
    feature__one.classList.remove("row")
    $(".feaure__select--para01").addClass("p_no_after")
    $(".feaure__select--para02").addClass("p_yes_after")
    $(".feaure__select--para01").removeClass("p_yes_after")
    $(".feaure__select--para03").removeClass("p_yes_after")
})

feature03.addEventListener("click", ()=>{
    
    feature__three.classList.toggle("show01");
    $(".feaure__select--para03").addClass("p_yes_after")
    $(".feaure__select--para02").removeClass("p_yes_after")
    feature__two.classList.remove("show01");
    feature__one.classList.remove("row")
    feature__one.classList.add("hide")
    $(".feaure__select--para01").addClass("p_no_after")
    $(".feaure__select--para01").removeClass("p_yes_after")
})



footerBtn.addEventListener("click", ()=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(footerInput.value))
  {
    
  } else {
    document.querySelector(".footer__span").classList.toggle("show")
    footerInput.style.border = "2px solid red";
  }
   
});



function repeat(string, number){
   console.log( string.repeat(number));
}

repeat("a", 10)