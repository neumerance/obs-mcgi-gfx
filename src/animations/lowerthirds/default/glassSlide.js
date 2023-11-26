import anime from 'animejs'

const glassSlide = () => {
  return {
    intro: () => {
      anime({
        targets: '.slide_1',
        left: '880px',
        easing: 'easeInOutQuint',
        duration: 700
      })
      anime({
        targets: '.slide_2',
        left: '880px',
        easing: 'easeInOutQuint',
        duration: 900
      })
      anime({
        targets: '.slide_3',
        left: '880px',
        easing: 'easeInOutQuint',
        duration: 1400
      })
      anime({
        targets: '.slide_4',
        left: '880px',
        easing: 'easeInOutQuint',
        duration: 700,
        delay: 600,
        changeComplete: () => {
          anime({
            targets: '.slide_5',
            right: '880px',
            easing: 'easeInOutQuint',
            duration: 1400
          })
          anime({
            targets: '.slide_6',
            right: '880px',
            easing: 'easeInOutQuint',
            duration: 700,
            delay: 600
          })
        }
      })
    },
    outro: () => {
      document.querySelector('.slide_1').style.left = '-130px'
      document.querySelector('.slide_2').style.left = '-110px'
      document.querySelector('.slide_3').style.left = '-110px'
      document.querySelector('.slide_4').style.left = '-90px'
      document.querySelector('.slide_5').style.right = '-110px'
      document.querySelector('.slide_6').style.right = '-90px'
    }
  }
}

export default glassSlide
