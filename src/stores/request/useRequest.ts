import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
// import { storeToRefs } from 'pinia';
export const useRequest = defineStore('request', () => {
  const settingShow = ref(false);//设置弹窗显隐
  const isScale = ref(false);//是否进行全局适配

  const times = ref(
    {jsllTime:['00:00:00', '13:47:30', '13:54:30', '14:19:30', '14:22:31', '14:30:30', '14:35:00', '14:38:00'], jsll:[3,3,5,7,5,3,6,8,56,4]}
  )

  return { times, isScale, }
})
