/*!
 *  v1.0.0
 * Copyright 2021 
 */

$(document).ready(function() {
  makeSwiper()
  makeAnimation()
})

function makeSwiper() {
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.carousel-control-next',
      prevEl: '.carousel-control-prev',
    },
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
      stopOnLast: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      afterInit: () => {
        console.log('afterInit')
        // $(".swiper-slide-active").addClass("effect")
      },
      slideChangeTransitionStart: () => {
        console.log('slideChangeTransitionStart')
        $('.swiper-slide').removeClass('effect')
      },
      slideChangeTransitionEnd: (a) => {
        console.log('slideChangeTransitionEnd')
        $('.swiper-slide-active').addClass('effect')
      },
      progress: () => {
        console.log('progress')
      },
    },
    preloadImages: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  })
  // swiper.autoplay.stop()
}

function makeAnimation() {
  var controller = new ScrollMagic.Controller()

  // TweenMax.set('.sub-visual.hanpass-card h2', { opacity: 1, x: 300 })
  // TweenMax.set('.sub-visual.hanpass-card .animation-hand', { opacity: 0, y: 70, rotateY: '180deg' })
  // var visual = new TimelineLite()
  //   .to('.sub-visual.hanpass-card .animation-hand', 0.5, { opacity: 1, y: 0 }, 0.4)
  //   .to('.sub-visual.hanpass-card h2', 0.5, { opacity: 1, x: 0 }, 0.2)
  //   .to('.sub-visual.hanpass-card .animation-hand', 0.5, { rotateY: 0 }, 0.9)

  var scene_visual = new ScrollMagic.Scene({
    triggerElement: '.sub-visual.hanpass-card',
    triggerHook: 0.8,
  })
    .setClassToggle('.sub-visual.hanpass-card', 'effect')
    // .setTween(visual)
    .addTo(controller)

  var scene1 = new ScrollMagic.Scene({
    triggerElement: '.sub-cont-hanpass-card-01',
    triggerHook: 0.8,
  })
    .setClassToggle('.sub-cont-hanpass-card-01', 'effect')
    .addTo(controller)

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.sub-cont-hanpass-card-02',
    triggerHook: 0.8,
  })
    .setClassToggle('.sub-cont-hanpass-card-02', 'effect')
    .addTo(controller)

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.sub-cont-hanpass-card-03',
    triggerHook: 0.8,
  })
    .setClassToggle('.sub-cont-hanpass-card-03', 'effect')
    .addTo(controller)

  //feature4
  gsap.set('.sub-cont-hanpass-card-04 .label > span', { y: '100%' })
  gsap.set('.sub-cont-hanpass-card-04 .maskBox > span', { y: '100%' })

  /** benefit1 **/
  var benefit1Action = new TimelineLite()
    .to('.sub-cont-hanpass-card-04 .benefit1 .label > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 0.1)
    .to('.sub-cont-hanpass-card-04 .benefit1 .maskBox.t1 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 0.3)
    .to('.sub-cont-hanpass-card-04 .benefit1 .maskBox.t2 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 0.5)
    .to('.sub-cont-hanpass-card-04 .benefit1 .maskBox.t3 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 1)
    .to('.sub-cont-hanpass-card-04 .benefit1 .maskBox.t4 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 1.2)
    .to('.sub-cont-hanpass-card-04 .benefit1 .maskBox.t5 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 1.4)

  var benefit_scene1 = new ScrollMagic.Scene({
    triggerElement: '.sub-cont-hanpass-card-04 .benefit1',
    triggerHook: 0.8,
  })
    .setTween(benefit1Action)
    .addTo(controller)
  /** benefit1 **/

  /** benefit2 **/
  var benefit2Action = new TimelineLite()
    .to('.sub-cont-hanpass-card-04 .benefit2 .label > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 0.1)
    .to('.sub-cont-hanpass-card-04 .benefit2 .maskBox.t1 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 0.3)
    .to('.sub-cont-hanpass-card-04 .benefit2 .maskBox.t2 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 0.5)
    .to('.sub-cont-hanpass-card-04 .benefit2 .maskBox.t3 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 1)
    .to('.sub-cont-hanpass-card-04 .benefit2 .maskBox.t4 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 1.2)

  var benefit_scene2 = new ScrollMagic.Scene({
    triggerElement: '.sub-cont-hanpass-card-04 .benefit2',
    triggerHook: 0.8,
  })
    .setTween(benefit2Action)
    .addTo(controller)
  /** benefit2 **/

  /** benefit3 **/
  var benefit3Action = new TimelineLite()
    .to('.sub-cont-hanpass-card-04 .benefit3 .label > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 0.1)
    .to('.sub-cont-hanpass-card-04 .benefit3 .maskBox.t1 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 0.3)
    .to('.sub-cont-hanpass-card-04 .benefit3 .maskBox.t2 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 0.5)
    .to('.sub-cont-hanpass-card-04 .benefit3 .maskBox.t3 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 1)
    .to('.sub-cont-hanpass-card-04 .benefit3 .maskBox.t4 > span', 0.5, { y: '0%', ease: 'power1.easeIn' }, 1.2)

  var benefit_scene3 = new ScrollMagic.Scene({
    triggerElement: '.sub-cont-hanpass-card-04 .benefit3',
    triggerHook: 0.8,
  })
    .setTween(benefit3Action)
    .addTo(controller)
  /** benefit3 **/

  var scene5 = new ScrollMagic.Scene({
    triggerElement: '.sub-cont-hanpass-card-05',
    triggerHook: 0.8,
  })
    .setClassToggle('.sub-cont-hanpass-card-05', 'effect')
    .addTo(controller)
}
