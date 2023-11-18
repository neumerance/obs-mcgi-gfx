<script setup>
  import { computed, reactive, watch } from 'vue';
  import useLowerthirdStore from '../../stores/lowerthirdStore';
  const store = useLowerthirdStore();

  const data = reactive({
    title: store.title,
    titleFontSize: store.titleFontSize,
    subTitle: store.subTitle,
    subTitleFontSize: store.subTitleFontSize
  })

  watch(data.title, (value) => {
    console.log("newValue", value);
    store.onTitleChange(value);
  })
  watch(data.titleFontSize, (value) => {
    store.onTitleFontSizeChange(value);
  })
  watch(data.subTitle, (value) => {
    store.onSubTitleChange(value);
  })
  watch(data.subTitleFontSize, (value) => {
    store.onSubTitleFontSizeChange(value);
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
        <input class="input is-small" type="text" placeholder="Title" v-model="data.title">
      </div>
      <div class="control controller__title-font">
        <input class="input is-small" type="number" min="2.4" step="0.01" v-model="data.titleFontSize">
      </div>
    </div>
    <div class="field mr-1 mb-1 is-flex">
      <div class="control mr-1 controller__sub-title">
        <input class="input is-small" type="text" placeholder="Sub-title" v-model="data.subTitle">
      </div>
      <div class="control controller__sub-title-font">
        <input class="input is-small" type="number" min="1.1" step="0.01" v-model="data.subTitleFontSize">
      </div>
    </div>
    <div class="field mr-1 mb-1 controller__is-active">
      <label class="checkbox">
        <input type="checkbox">
        Active?
      </label>
    </div>
    <hr class="solid">
  </div>
</template>
