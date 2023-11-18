import anime from 'animejs'

const blueTopBar = () => {
  return {
    intro: (delay = 0) => {
      anime({
        targets: '.lowerthirds__top-bar',
        right: '0px',
        easing: 'easeOutQuart',
        duration: 800,
        delay: delay
      })
    },
    outro: (delay = 0) => {
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

export default blueTopBar;
