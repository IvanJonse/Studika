


let Search = () => {
    
    var f = document.getElementById('f'),
    s = document.getElementById('name_ob'), o = s.querySelectorAll("option"),
    inp = document.getElementById('opt'),
    reg;
    inp.oninput = function() {
    reg = new RegExp(this.value, "ig"); 
    s.options.length = 0;
    for (var i=0; i<o.length; i++)  {
        reg.test(o[i].text) && s.options.add(o[i]);
        reg.lastIndex = 0;
    }
};
}


document.addEventListener('DOMContentLoaded', ()=> {

    let selectDrop = document.querySelector('#name_ob') 
    
      fetch(`https://restcountries.com/v3.1/all`).then(e => e.json()).then(data=> {

            let outPut = ''

            data.map((cityItem) => {
                 outPut  += `<option class='header__inner__item__list__search__select__item'>${cityItem.name.common}</option>` 
            })
           
            selectDrop.innerHTML = outPut
            
            Search()
    
        }) 
        
})


let inp = document.getElementById("opt")
const areaSelect = document.querySelector(`[id="name_ob"]`);    
const cityCont = document.getElementById('NewCityCont')

let input = document.getElementById('open') 

let inputClose = document.getElementById('open') 

const container = document.querySelector(".selectBlock");

let openMode = () => {
input.addEventListener('click', ()=> {
    container.classList.add("active");
})}

let closeMode = () => {
    inputClose.addEventListener('click', ()=> {
    container.classList.remove("active");
})}


let onMove = (count, goTo) => {

let button = document.getElementById(goTo)

var ball = document.getElementsByClassName("header__menu__list__track")[0];

button.addEventListener('click', ()=> {

    ball.style.transform = `translateX(-${count}px)`
})
}

const menuMobile = document.getElementById('menuMobile') 

const activeMenu = document.querySelector(".header__cont");

const closeMenu = document.querySelector(".menuBurger");

let openMenu = () => {
menuMobile.addEventListener('click', ()=> {
closeMenu.classList.toggle("menuBurger__active");
activeMenu.classList.toggle("header__cont__active");
})}

var element = document.querySelector('.header__inner');
window.addEventListener('scroll', function () {

if (window.scrollY > 100) {
    element.classList.add("shadow");
} else {
    element.classList.remove("shadow");
}
});




  



    