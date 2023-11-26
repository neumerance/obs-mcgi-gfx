<script setup>
  import { computed, watch  } from 'vue'
  import lowerthirdStore from '../../stores/lowerthirdStore'
  import lowerThirdChannel from '../../channels/lowerthirdChannel'
  import animation from '../../animations/lowerthirds/default'

  const store = lowerthirdStore()
  lowerThirdChannel(store).listen()

  const currentDate = computed(() => {
    const format = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date().toLocaleDateString("en-US", format)
  })
  const showLowerThird = computed(() => store.showLowerThird)

  watch(showLowerThird, (value) => {
    if (value) {
      animation.intro()
    } else {
      animation.outro()
    }
  })
</script>

<style lang="scss" scoped>
.lowerthirds {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;

  &__top {
    width: 1280px;
    height: 109px;
    max-height: 109px;
    overflow: hidden;
    position: relative;
    margin-bottom: -40px;
  }

  &__title {
    font-weight: 700;
    font-size: 6vh;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    height: 70px;
    max-height: 70px;
    overflow: hidden;
    position: relative;

    &--text {
      width: 100%;
      height: 70px;
      max-height: 70px;
      line-height: 70px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -70px;
    }
  }

  &__subtitle {
    position: absolute;
    left: 0;
    font-weight: 700;
    font-size: 3vh;
    text-transform: uppercase;
    color: rgb(28, 99, 221);
    width: 518px;
    height: 39px;
    max-height: 39px;
    overflow: hidden;

    &--text {
      width: 100%;
      height: 39px;
      max-height: 39px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -39px;
    }
  }

  &__date {
    position: absolute;
    left: 0;
    font-weight: 700;
    font-size: 3vh;
    text-transform: uppercase;
    color: #FFFFFF;
    width: 362px;
    height: 39px;
    max-height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__top-bar {
    background: linear-gradient(180deg,#0085FF 0%, rgb(26, 102, 222) 100%);
    height: 109px;
    width: 880px;
    margin-bottom: -39px;
    position: absolute;
    right: -880px;

    &__glass-slides {
      width: 100%;
      height: 109px;
      max-height: 109px;
      top: 0;
      position: absolute;
      overflow: hidden;

      div {
        background: rgba(255, 255, 255, 0.4);
        top: 0;
        position: absolute;
        z-index: 1;
      }

      &--left-lg {
        left: -130px;
      }
      &--left-md {
        left: -110px;
      }
      &--left-sm {
        left: -90px;
      }
      &--right-lg {
        right: -130px;
      }
      &--right-md {
        right: -110px;
      }
      &--right-sm {
        right: -90px;
      }

      &-lg {
        width: 130px;
        height: 109px;
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      }
      &-md {
        width: 110px;
        height: 109px;
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      }
      &-sm {
        width: 90px;
        height: 109px;
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      }
    }
  }

  &__middle-bar {
    background: rgba(255, 231, 33, 1);
    height: 39px;
    width: 100%;
    position: absolute;
    right: -880px;
  }

  &__middle-sub-bar {
    background: rgba(241, 178, 16, 1);
    height: 39px;
    width: 362px;
    position: absolute;
    right: -362px;
  }

  &__middle-date-bar  {
    background: rgba(231, 131, 0, 1);
    height: 39px;
    width: 342px;
    position: absolute;
    right: -342px;
  }

  &__bottom {
    height: 61px;
    max-height: 61px;
    overflow: hidden;
    position: relative;
  }

  &__bottom-bar {
    background: linear-gradient(92deg, #70CBFF 0%, #7098FF 100%);
    height: 61px;
    width: 100%;
    position: absolute;
    bottom: -61px;
    z-index: -1;
  }
}
.justify-right {
  display: flex;
  justify-content: flex-end;
}
.slanted {
  -webkit-clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%);
}
</style>

<template>
  <div class="lowerthirds">
    <div class="lowerthirds__top justify-right">
      <div class="lowerthirds__top-bar slanted">
        <div class="lowerthirds__top-bar__glass-slides">
          <div class="slide_1 lowerthirds__top-bar__glass-slides-lg lowerthirds__top-bar__glass-slides--left-lg"></div>
          <div class="slide_2 lowerthirds__top-bar__glass-slides-md lowerthirds__top-bar__glass-slides--left-md"></div>
          <div class="slide_3 lowerthirds__top-bar__glass-slides-md lowerthirds__top-bar__glass-slides--left-md"></div>
          <div class="slide_4 lowerthirds__top-bar__glass-slides-sm lowerthirds__top-bar__glass-slides--left-sm"></div>
          <div class="slide_5 lowerthirds__top-bar__glass-slides-md lowerthirds__top-bar__glass-slides--right-md"></div>
          <div class="slide_6 lowerthirds__top-bar__glass-slides-sm lowerthirds__top-bar__glass-slides--right-sm"></div>
        </div>
        <div class="lowerthirds__title">
          <div class="lowerthirds__title--text" :style="{ 'font-size': `${store.titleFontSize}vh` }">
            {{ store.title }}
          </div>
        </div>
        <div class="lowerthirds__middle-bar">
          <div class="lowerthirds__subtitle">
            <div
              class="lowerthirds__subtitle--text"
              :style="{ 'font-size': `${store.subTitleFontSize}vh`, 'line-height': `${store.subTitleFontSize}vh` }"
            >
              {{ store.subTitle }}
            </div>
          </div>
          <div class="lowerthirds__middle-sub-bar slanted">
            <div class="lowerthirds__middle-date-bar slanted">
              <div class="lowerthirds__date">
                {{ currentDate }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lowerthirds__bottom">
      <div class="lowerthirds__bottom-bar"></div>
    </div>
  </div>
</template>
