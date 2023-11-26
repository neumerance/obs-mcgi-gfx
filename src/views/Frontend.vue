<script setup>
  import { watch, computed, ref } from 'vue'
  import Default from '../components/Default.vue'
  import lowerthirdStore from '../stores/lowerthirdStore'
  import lowerThirdChannel from '../channels/lowerthirdChannel'

  const store = lowerthirdStore()
  const showLowerThird = computed(() => store.showLowerThird)
  lowerThirdChannel(store).listen()

  const layouts = {
    default: Default
  }
  const layout = computed(() => layouts[store.layout])
  const currentRenderedLayout = ref(null)

  watch(showLowerThird, (value) => {
    if (value) {
      currentRenderedLayout.value.lowerthirdAnimation.intro()
    } else {
      currentRenderedLayout.value.lowerthirdAnimation.outro()
    }
  })
</script>

<template>
  <main>
    <component :is="layout" ref="currentRenderedLayout" />
  </main>
</template>
