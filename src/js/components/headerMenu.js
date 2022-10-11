const headerOpenBtn = document.querySelector(".burger-btn")
const headerCloseBtn = document.querySelector(".header-menu__close")
const headerInner = document.querySelector(".header-menu__inner")
const headerMenu = document.querySelector(".header-menu")
const body = document.querySelector("body")
const html = document.querySelector("html")
const inputHelper = document.querySelector(".header-menu__helper")
const headerOverfloy = document.querySelector(".header__overfloy")
// const headerTop = document.querySelector(".header__top")

inputHelper.value = 1
var documentWidth = parseInt(document.documentElement.clientWidth);
var windowsWidth = parseInt(window.innerWidth);
var scrollWidth = windowsWidth - documentWidth;

headerOpenBtn.addEventListener("click", () => {
  if(inputHelper.value == 1){
    inputHelper.value = 0
    const tl = gsap.timeline({ease: "power3.out"});
    body.classList.add("scrollHidden")
    headerOverfloy.classList.add("active")

    body.style.paddingRight = `${scrollWidth}px`
    // headerTop.style.paddingRight = `${scrollWidth}px`

    tl
    .to(headerMenu, {
      y: 0,
      duration: .5
    })
    .to(headerInner, {
      y: 0,
      duration: .5
    }, "-=.2")
    setTimeout(()=> {
      inputHelper.value = 1
    }, 200)
  }
})
headerCloseBtn.addEventListener("click", () => {
  if(inputHelper.value == 1){
    inputHelper.value = 0
    const tl = gsap.timeline({ease: "power3.out",});
    body.classList.remove("scrollHidden")
    headerOverfloy.classList.remove("active")
    body.style.paddingRight = `0px`
    // headerTop.style.paddingRight = `0px`
    tl
    .to(headerInner, {
      y: '-100%',
      duration: .5
    })
    .to(headerMenu, {
      y: '-100%',
      duration: .5
    }, "-=.5")}
  setTimeout(()=> {
    inputHelper.value = 1
  }, 200)

})
headerOverfloy.addEventListener("click", () => {
  if(inputHelper.value == 1){
    inputHelper.value = 0
    const tl = gsap.timeline({ease: "power3.out",});
    body.classList.remove("scrollHidden")
    headerOverfloy.classList.remove("active")
    body.style.paddingRight = `0px`
    // headerTop.style.paddingRight = `0px`
    tl
    .to(headerInner, {
      y: '-100%',
      duration: .5
    })
    .to(headerMenu, {
      y: '-100%',
      duration: .5
    }, "-=.5")}
  setTimeout(()=> {
    inputHelper.value = 1
  }, 200)

})

