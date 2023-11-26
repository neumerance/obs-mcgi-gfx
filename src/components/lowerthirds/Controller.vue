<script setup>
  import { ref, watch } from 'vue';
  import useLowerthirdStore from '../../stores/lowerthirdStore'
  import lowerThirdChannel from '../../channels/lowerthirdChannel'

  const store = useLowerthirdStore();
  const title = ref(store.title)
  const titleFontSize = ref(store.titleFontSize)
  const subTitle = ref(store.subTitle)
  const subTitleFontSize = ref(store.subTitleFontSize)
  const showLowerThird = ref(store.showLowerThird)

  watch(title, (value) => {
    store.onChange('title', value);
    lowerThirdChannel(store).post({ field: 'title', content: value });
  })
  watch(titleFontSize, (value) => {
    store.onChange('titleFontSize', value);
    lowerThirdChannel(store).post({ field: 'titleFontSize', content: value });
  })
  watch(subTitle, (value) => {
    store.onChange('subTitle', value);
    lowerThirdChannel(store).post({ field: 'subTitle', content: value });
  })
  watch(subTitleFontSize, (value) => {
    store.onChange('subTitleFontSize', value);
    lowerThirdChannel(store).post({ field: 'subTitleFontSize', content: value });
  })
  watch(showLowerThird, (value) => {
    store.onChange('showLowerThird', value);
    lowerThirdChannel(store).post({ field: 'showLowerThird', content: value });
  })
</script>
<style lang="scss" scoped>
  .controller {
    &__title, &__sub-title {
      width: 250px;
      input {
        text-transform: uppercase;
      }
    }
    &__title-font, &__sub-title-font {
      width: 65px;
    }
  }
</style>

<template>
  <div class="controller p-2 mb-3">
    <h2 class="is-size-5 mb-2">Lowerthirds</h2>
    <div class="field mr-1 mb-1 is-flex">
      <div class="control mr-1 controller__title">
        <input class="input is-small" type="text" placeholder="Title" v-model="title">
      </div>
      <div class="control controller__title-font">
        <input class="input is-small" type="number" min="2.4" step="0.01" v-model="titleFontSize">
      </div>
    </div>
    <div class="field mr-1 mb-1 is-flex">
      <div class="control mr-1 controller__sub-title">
        <input class="input is-small" type="text" placeholder="Sub-title" v-model="subTitle">
      </div>
      <div class="control controller__sub-title-font">
        <input class="input is-small" type="number" min="1.1" step="0.01" v-model="subTitleFontSize">
      </div>
    </div>
    <div class="field mr-1 mb-1 controller__is-active">
      <label class="checkbox">
        <input type="checkbox" v-model="showLowerThird">
        Active?
      </label>
    </div>
    <hr class="solid">
  </div>
</template>
