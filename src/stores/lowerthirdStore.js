import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useLowerthirdStore = defineStore({
  id: 'lowerthirds',
  state: () => {
    return {
      title: ref('worship service'),
      subTitle: ref('not intended for broadcast'),
      titleFontSize: ref(6),
      subTitleFontSize: ref(3),
      showLowerThird: false,
      layout: 'default'
    }
  },
  actions: {
    onChange(field, value) {
      this[field] = value
    }
  }
})

export default useLowerthirdStore
