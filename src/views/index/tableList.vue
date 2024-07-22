<template>
  <div>
    <el-table :data="tableData" border :table-layout="'fixed'">
      <el-table-column prop="date" label="出水悬浮物" width="100" />
      <el-table-column prop="name" label="进水悬浮物" width="100" />
      <el-table-column prop="address" label="进水PH" />
      <el-table-column prop="name" label="出水PH" />
      <el-table-column prop="name" label="进水流量"  />
      <el-table-column prop="name" label="出水流量"  />
      <el-table-column prop="name" label="1#转股过滤器液位" width="150" />
      <el-table-column prop="name" label="2#转股过滤器液位"  width="150"/>

    </el-table>
    <!-- <el-pagination
      background
      layout="prev, pager, next"
      :total="tableData.length"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
    /> -->
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const tableData = ref([
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Jerry",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Lucy",
    address: "No. 189, Grove St, Los Angeles",
  }
]);

const currentPage = ref(1);
const pageSize = ref(5);

// const currentTableData = computed(() => {
//   const start = (currentPage.value - 1) * pageSize.value;
//   const end = currentPage.value * pageSize.value;
//   return tableData.value.slice(start, end);
// });

// const handleCurrentChange = (page: number) => {
//   currentPage.value = page;
// };
</script>

<style>
.el-table {
    --el-table-border-color: rgba(255, 255, 255, 0.13);
    --el-table-border: 1px solid rgba(255, 255, 255, 0.13);
    --el-table-text-color: #fff;
    --el-table-header-text-color: #fff;
    --el-table-row-hover-bg-color:rgba(255, 255, 255, 0.13);
    --el-table-current-row-bg-color: rgba(255, 255, 255, 0.13);
    --el-table-header-bg-color:rgba(255, 255, 255, 0.13);
    --el-table-fixed-box-shadow: var(--el-box-shadow-light);
    --el-table-bg-color: rgba(255, 255, 255, 0.13);
    --el-table-tr-bg-color: #ffffff00;
    --el-table-expanded-cell-bg-color: var(--el-fill-color-blank);
    --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0,0,0,0.15);
    --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0,0,0,0.15);
    --el-table-index: var(--el-index-normal);


}
</style>
