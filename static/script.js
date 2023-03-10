/**Abre e fecha o menu lateral em modo mobile */
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nav-active");
});

/**Fechar o menu quando clicado e mudar o botão de menu para hamburguer */
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
  item.addEventListener("click", () => {
    if(body.classList.contains("menu-nav-active")){
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list")
    }
  })
})

/**Dropdown do trabalho */

const trabalho1 = document.querySelector(".sublist1");
const trabalho2 = document.querySelector(".sublist2");
const trabalho3 = document.querySelector(".sublist3");
const seta1 = document.querySelector("#seta1");
const seta2 = document.querySelector("#seta2");
const seta3 = document.querySelector("#seta3");

seta1.addEventListener("click", () => {
  closeSubmenu();
  seta1.classList.contains("bi-chevron-right")
  ?
    seta1.classList.replace("bi-chevron-right", "bi-chevron-down")
  : seta1.classList.replace("bi-chevron-down","bi-chevron-right");
  
  seta1.classList.contains("bi-chevron-right")
  ?
    trabalho1.classList.replace("d-block", "d-none")
  : trabalho1.classList.replace("d-none", "d-block");

})
seta2.addEventListener("click", () => {
  closeSubmenu();
  seta2.classList.contains("bi-chevron-right")
  ?
    seta2.classList.replace("bi-chevron-right", "bi-chevron-down")
  : seta2.classList.replace("bi-chevron-down","bi-chevron-right");
  
  seta2.classList.contains("bi-chevron-right")
  ?
    trabalho2.classList.replace("d-block", "d-none")
  : trabalho2.classList.replace("d-none", "d-block");

})
seta3.addEventListener("click", () => {
  closeSubmenu();
  seta3.classList.contains("bi-chevron-right")
  ?
    seta3.classList.replace("bi-chevron-right", "bi-chevron-down")
  : seta3.classList.replace("bi-chevron-down","bi-chevron-right");
  
  seta3.classList.contains("bi-chevron-right")
  ?
    trabalho3.classList.replace("d-block", "d-none")
  : trabalho3.classList.replace("d-none", "d-block");

})

function closeSubmenu(){
  trabalho1.classList.replace("d-block", "d-none");
  trabalho2.classList.replace("d-block", "d-none");
  trabalho3.classList.replace("d-block", "d-none");
}

/**Animaçã */

const item = document.querySelectorAll("[data-anime]");
const animeScroll = () => {
  const windowTop = window.scrollY + window.innerHeight * 0.85
  
  item.forEach(element => {
    if(windowTop > element.offsetTop){
      element.classList.add("animate");  
    } else{
      element.classList.remove("animate");
    }
  })
}

animeScroll()

window.addEventListener("scroll", () => {
  animeScroll();
})