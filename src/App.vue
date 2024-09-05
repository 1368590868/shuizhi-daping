<script setup lang="ts">
import {  RouterView, useRouter } from 'vue-router'
import {useRequest} from '@/stores/request/useRequest'
import { onBeforeMount, onMounted, onUnmounted } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const {setToken,getData,getTokens} = useRequest()
const router = useRouter()


let timer:any = null

onMounted(() => {
  const token = new URL(location.href).searchParams.get('token') ?? ''
  
  setToken(token )
  getTokens()
 timer = setInterval(() => {
    getData()
  }, 1000 * 3)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
    <el-config-provider :locale="zhCn">
      <RouterView />
    </el-config-provider>
</template>

<style scoped>

</style>
