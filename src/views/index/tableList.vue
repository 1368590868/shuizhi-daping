<template>
  <div>
    <el-table
      :data="list"
      border
      :table-layout="'fixed'"
      :scrollbarAlwaysO="true"
      height="500"
      style="width: 800px; font-size: 10px"
    >
      <el-table-column align="center" prop="dateTime" label="时间" width="110">
        <template #default="scope">
          <span>{{ getDate(scope.row.dateTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="csxf"
        label="出水悬浮物"
        width="75"
      />
      <el-table-column
        align="center"
        prop="csxf"
        label="进水悬浮物"
        width="75"
      />
      <el-table-column align="center" prop="jsph" label="进水PH" width="90" />
      <el-table-column align="center" prop="csph" label="出水PH" width="90" />
      <el-table-column align="center" prop="jsll" label="进水流量" width="90" />
      <el-table-column align="center" prop="csll" label="出水流量" width="90" />
      <el-table-column
        align="center"
        prop="zgywa"
        label="1号转股液位"
        width="90"
      />
      <el-table-column
        align="center"
        prop="zgywb"
        label="2号转股液位"
        width="90"
      />
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
import { computed, onMounted, ref } from "vue";
import { useRequest } from "@/stores";
import dayjs from "dayjs";

const getDate = (date: string) => {
  return dayjs(date).format(" MM-DD HH:mm:ss");
};

const { list } = useRequest();
onMounted(() => {
  console.log(list);
});

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
  },
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
  --el-table-row-hover-bg-color: rgba(255, 255, 255, 0.13);
  --el-table-current-row-bg-color: rgba(255, 255, 255, 0.13);
  --el-table-header-bg-color: rgba(255, 255, 255, 0.13);
  --el-table-fixed-box-shadow: var(--el-box-shadow-light);
  --el-table-bg-color: rgba(255, 255, 255, 0.13);
  --el-table-tr-bg-color: #ffffff00;
  --el-table-expanded-cell-bg-color: var(--el-fill-color-blank);
  --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-index: var(--el-index-normal);
}
</style>
