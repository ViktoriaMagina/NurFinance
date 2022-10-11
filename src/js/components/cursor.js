// import { mobileCheck } from "../functions/mobile-check";
// const result = mobileCheck();
// if(result==='unknown'){
// const cursor = $('.cursor')
// cursor.addClass('notMobile')
// var posX = 0,
//     posY = 0;

// var mouseX = 0,
//     mouseY = 0;

// TweenMax.to({}, 0.016, {
//   repeat: -1,
//   onRepeat: function() {
//     posX += (mouseX - posX) / 9;
//     posY += (mouseY - posY) / 9;
//     TweenMax.set(cursor, {
//         css: {
//         left: mouseX - 8,
//         top: mouseY - 8
//         }
//     });
//   }
// });

// $(document).on("mousemove", function(e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });

// $("a").on("mouseenter", function() {
//     cursor.addClass("active");
//     // follower.addClass("active");
// });
// $("a").on("mouseleave", function() {
//     cursor.removeClass("active");
//     // follower.removeClass("active");
// });
// $("button").on("mouseenter", function() {
//   cursor.addClass("active");
//   // follower.addClass("active");
// });
// $("button").on("mouseleave", function() {
//   cursor.removeClass("active");
//   // follower.removeClass("active");
// });

// }


gsap.set('.cursor__follower',{xPercent:-50,yPercent:-50});
gsap.set('.cursor__main',{xPercent:-50,yPercent:-50});

var follow = document.querySelector('.cursor__follower');
var cur = document.querySelector('.cursor__main');

window.addEventListener('mousemove',e => {
    gsap.to(cur,0.2,{x:e.clientX,y:e.clientY});
    gsap.to(follow,0.6,{x:e.clientX,y:e.clientY});
});

const links = document.querySelectorAll('a')
const buttons = document.querySelectorAll('button')
links.forEach(item => {
  item.addEventListener("mouseleave", function() {
    cur.classList.remove("active");
  });
})
links.forEach(item => {
  item.addEventListener("mouseenter", function() {
    cur.classList.add("active");
  });
})
buttons.forEach(item => {
  item.addEventListener("mouseleave", function() {
    cur.classList.remove("active");
  });
})
buttons.forEach(item => {
  item.addEventListener("mouseenter", function() {
    cur.classList.add("active");
  });
})
