<script setup lang="ts">
import ItemWrap from "@/components/item-wrap";
import LeftTop from "./left-top.vue";
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./center-bottom.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-bottom.vue";
import Video from "./video.vue";
import TableList from "./tableList.vue";

// get html file path
import { ref } from "vue";
// 读取test文件下的index.html文件内容，并获取body内容
const htmlFilePath = `${window.origin}/ds.html`

</script>

<template>
<iframe :src="htmlFilePath" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>
</template>

<style scoped lang="scss">

</style>
