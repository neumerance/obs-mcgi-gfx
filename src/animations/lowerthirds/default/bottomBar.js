import anime from 'animejs'

const blueBottomBar = () => {
  return {
    intro: (delay = 0) => {
      anime({
        targets: '.lowerthirds__bottom .lowerthirds__bottom-bar',
        bottom: '0px',
        easing: 'easeOutQuart',
        delay: delay,
        duration: 800
      })
    },
    outro: (delay = 0) => {
      anime({
        targets: '.lowerthirds__bottom .lowerthirds__bottom-bar',
        bottom: '-61px',
        easing: 'easeOutQuart',
        delay: delay,
        duration: 800
      })
    }
  }
}

export default blueBottomBar;
