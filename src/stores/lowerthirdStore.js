import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useLowerthirdStore = defineStore('lowerthirds', () => {
  const title = ref('worship service')
  const subTitle = ref('not intended for broadcast')
  const titleFontSize = ref(2.4)
  const subTitleFontSize = ref(1.1)
  const currentDate = computed(() => {
    const format = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date().toLocaleDateString("en-US", format)
  })

  const onTitleChange = (value) => {
    titleFontSize = value
  }
  const onTitleFontSizeChange = (value) => {
    titleFontSize = value
  }
  const onSubTitleChange = (value) => {
    subTitle = value
  }
  const onSubTitleFontSizeChange = (value) => {
    subTitleFontSize = value
  }

  return {
    title,
    titleFontSize,
    subTitle,
    subTitleFontSize,
    currentDate,
    onTitleChange,
    onTitleFontSizeChange,
    onSubTitleChange,
    onSubTitleFontSizeChange
  }
})

export default useLowerthirdStore
