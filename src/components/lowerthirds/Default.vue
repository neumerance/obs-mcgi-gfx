<script setup>
</script>

<style lang="scss" scoped>
.lowerthirds {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;

  &__title {
    font-weight: 700;
    font-size: 2.4vw;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    height: 70px;
    max-height: 70px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__subtitle {
    position: absolute;
    left: 0;
    font-weight: 700;
    font-size: 1.1vw;
    text-transform: uppercase;
    color: rgb(28, 99, 221);
    width: 518px;
    height: 39px;
    max-height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__date {
    position: absolute;
    left: 0;
    font-weight: 700;
    font-size: 1.1vw;
    text-transform: uppercase;
    color: #FFFFFF;
    width: 362px;
    height: 39px;
    max-height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__blue-upper-bar {
    background: linear-gradient(180deg,#0085FF 0%, rgb(26, 102, 222) 100%);
    height: 109px;
    width: 880px;
    margin-bottom: -39px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__yellow-bar {
    background: rgba(255, 231, 33, 1);
    height: 39px;
    width: 100%;
    position: relative;
  }

  &__orange-bar {
    background: rgba(231, 131, 0, 1);
    height: 39px;
    width: 342px;
    position: absolute;
    right: 0px;
  }

  &__light-orange-bar {
    background: rgba(241, 178, 16, 1);
    height: 39px;
    width: 362px;
    position: absolute;
    right: 0px;
  }

  &__blue-bottom-bar {
    background: linear-gradient(92deg, #70CBFF 0%, #7098FF 100%);
    height: 61px;
    width: 100%;
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
    <div class="lowerthirds__bar justify-right">
      <div class="lowerthirds__blue-upper-bar slanted">
        <div class="lowerthirds__title">
          Worship Service
        </div>
        <div class="lowerthirds__yellow-bar">
          <div class="lowerthirds__subtitle">
            Not Intended for broadcast
          </div>
          <div class="lowerthirds__light-orange-bar slanted">
            <div class="lowerthirds__orange-bar slanted">
              <div class="lowerthirds__date">
                November, 9, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lowerthirds__bar">
      <div class="lowerthirds__blue-bottom-bar"></div>
    </div>
  </div>
</template>
