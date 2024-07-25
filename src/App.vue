<script setup lang="ts">
import {  RouterView, useRouter } from 'vue-router'
import {useRequest} from '@/stores/request/useRequest'
import { onBeforeMount, onMounted, onUnmounted } from 'vue';

const {setToken,getData} = useRequest()
const router = useRouter()


let timer:any = null

onMounted(() => {
  const token = new URL(location.href).searchParams.get('token') ?? ''
  
  setToken(token )
 timer = setInterval(() => {
    getData()
  }, 1000 * 3)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
