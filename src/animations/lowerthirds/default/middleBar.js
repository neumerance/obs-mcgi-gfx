import anime from 'animejs'

const middleBar = () => {
  return {
    intro: (delay) => {
      anime({
        targets: '.lowerthirds__middle-bar',
        right: '0px',
        easing: 'easeOutQuart',
        duration: 800,
        delay: delay,
        changeComplete: () => {
          anime({
            targets: '.lowerthirds__title--text',
            top: '0px',
            easing: 'easeOutQuart',
            duration: 300
          })
        }
      })
      anime({
        targets: '.lowerthirds__middle-sub-bar',
        right: '0px',
        easing: 'easeOutQuart',
        duration: 400,
        delay: delay + 300,
        changeComplete: () => {
          anime({
            targets: '.lowerthirds__subtitle--text',
            top: '0px',
            easing: 'easeOutQuart',
            duration: 300
          })
        }
      })
      anime({
        targets: '.lowerthirds__middle-date-bar',
        right: '0px',
        easing: 'easeOutQuart',
        duration: 350,
        delay: delay + 400
      })
    },
    outro: (delay) => {
      anime({
        targets: '.lowerthirds__title--text',
        top: '-70px',
        easing: 'easeOutQuart',
        duration: 300
      })
      anime({
        targets: '.lowerthirds__subtitle--text',
        top: '-39px',
        easing: 'easeOutQuart',
        duration: 300
      })
      anime({
        targets: '.lowerthirds__middle-date-bar',
        right: '-342px',
        easing: 'easeOutQuart',
        duration: 350,
        delay: delay
      })
      anime({
        targets: '.lowerthirds__middle-sub-bar',
        right: '-362px',
        easing: 'easeOutQuart',
        duration: 400,
        delay: delay + 400
      })
      anime({
        targets: '.lowerthirds__middle-bar',
        right: '-880px',
        easing: 'easeOutQuart',
        duration: 800,
        delay: delay + 400,
        changeComplete: () => {

        }
      })
    }
  }
}

export default middleBar
