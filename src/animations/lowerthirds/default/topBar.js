import anime from 'animejs'
import glassSlide from './glassSlide'

const topBar = () => {
  return {
    intro: (delay = 0) => {
      anime({
        targets: '.lowerthirds__top-bar',
        right: '0px',
        easing: 'easeOutQuart',
        duration: 800,
        delay: delay,
        changeComplete: () => {
          glassSlide().intro()
        }
      })
    },
    outro: (delay = 0) => {
      glassSlide().outro()
      anime({
        targets: '.lowerthirds__top-bar',
        right: '-880px',
        easing: 'easeOutQuart',
        duration: 800,
        delay: delay
      })
    }
  }
}

export default topBar;
