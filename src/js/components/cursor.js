import { mobileCheck } from "../functions/mobile-check";
const result = mobileCheck();
if(result==='unknown'){
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

}


