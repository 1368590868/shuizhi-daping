import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { setLocalStorage } from "@/utils";
import { StorageEnum } from "@/enums";
import { getDetail, getList, getToken } from "@/api";
import dayjs from "dayjs";
// import { storeToRefs } from 'pinia';
export const useRequest = defineStore("request", () => {
  const data = reactive<any>({
    zgfxb: 0,
    zgfxa: 0,
    csph: 0,
    jsxf: [0.0],
    jsph: 0,
    zgywb: [0],
    csxf: [0],
    zgywa: [0],
    jsllTime: ["00:00:00"],
    jsll: [0],
    zgztb: 0,
    zgzta: 0,
    csll: [0],
    list: [],
  });

  const tableList = reactive([]);
  const token = ref({
    msg: '{"msg":"操作成功!","code":"200","data":{"accessToken":"","expireTime":1726037506611}}',
    code: 200,
  });

  const setToken = (token: string) => {
    setLocalStorage(StorageEnum.GB_TOKEN_STORE, token);
  };

  const getTokens = async () => {
    const res3 = await getToken();
    token.value = res3;
    return res3
  };

  const getData = async () => {
    const res = await getDetail();
    const res2 = await getList();

    Object.assign(data, coverData(res));
    Object.assign(tableList, res2.rows || []);
  };

  function coverData(res: any) {
    const data = {
      ...res,
      list: [
        {
          deviceName: "1#转股过滤器反洗泵运行信号",
          cityName: "重庆市",
          countyName: "-",
          createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          deviceId: "40017",
          gatewayno: 10000,
          onlineState: res.zgfxa,
        },
        {
          deviceName: "2#转股过滤器反洗泵运行信号",
          cityName: "重庆市",
          countyName: "-",
          createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          deviceId: "40017",
          gatewayno: 10000,
          onlineState: res.zgfxb,
        },
        {
          deviceName: "1#转股过滤器转鼓转筒运行信号",
          cityName: "重庆市",
          countyName: "-",
          createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          deviceId: "40017",
          gatewayno: 10000,
          onlineState: res.zgzta,
        },
        {
          deviceName: "2#转股过滤器转鼓转筒运行信号",
          cityName: "重庆市",
          countyName: "-",
          createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          deviceId: "40017",
          gatewayno: 10000,
          onlineState: res.zgztb,
        },
      ],
    };

    return data;
  }

  return { times: data, list: tableList, token, setToken, getData,getTokens };
});
