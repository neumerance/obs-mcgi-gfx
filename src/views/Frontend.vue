<script setup>
  import { watch, computed } from 'vue'
  import Default from '../components/lowerthirds/Default.vue'
  import animation from '../animations/lowerthirds/default'
  import lowerthirdStore from '../stores/lowerthirdStore'
  import lowerThirdChannel from '../channels/lowerthirdChannel'

  const store = lowerthirdStore()
  const showLowerThird = computed(() => store.showLowerThird)
  lowerThirdChannel(store).listen()

  watch(showLowerThird, (value) => {
    if (value) {
      animation.intro()
    } else {
      animation.outro()
    }
  })
</script>

<template>
  <main>
    <Default />
  </main>
</template>
