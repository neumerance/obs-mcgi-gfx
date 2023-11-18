import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useLowerthirdStore = defineStore('lowerthirds', () => {
  const title = ref('worship service')
  const subTitle = ref('not intended for broadcast')
  const currentDate = computed(() => {
    const format = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date().toLocaleDateString("en-US", format)
  })

  function onTitleChange(value) {
    title.value = value
  }
  function onSubTitleChange(value) {
    title.subTitle = value
  }

  return {
    title,
    subTitle,
    currentDate,
    onTitleChange,
    onSubTitleChange
  }
})

export default useLowerthirdStore
