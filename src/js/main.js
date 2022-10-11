// import './_vendor';
// import vars from './_vars';
// import './_functions';
// import './_components';

import './components/headerMenu'
import '../js/libs/nouislider.min.js'
import './components/indexSectionSlider'
import './components/calculate-acc-com'
import './components/reviews-slider'
import './components/useful-tabs'
import './components/cursor'
import './components/calculate-popup'
import './components/calculate-popup-big'



const initialAnimation = () => {
  const pageBody = document.querySelector('.page__body')
  const preloader = document.querySelector('.preloader')
  preloader.classList.add('active')
  pageBody.classList.add('hidden')
  gsap.to('.preloader__logo', {
    duration: 0.5,
    opacity: 1,
    // yPercent: 50,
  })
  setTimeout(()=> {
    const timeline = gsap.timeline()
    timeline
    .to('.preloader__logo', {
      duration: 0.3,
      opacity: 0,
      // yPercent: 50,
    })
    .to('.preloader', {
      opacity: 0,
      duration: 0.3,
      // delay: .3,
    })
    .to('.site-container', {
      opacity: 1,
      duration: 0.3,
      // delay: .3,
    }, '-=.6')
    // preloader.classList.remove('active')
    pageBody.classList.remove('hidden')
    preloader.classList.add('remove')

  }, 2000)

}
initialAnimation()
