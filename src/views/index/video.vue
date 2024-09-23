<script lang="ts" setup>
import dayjs from "dayjs";
import EZUIKit from "ezuikit-js";
import { onMounted, reactive, ref } from "vue";
import { useRequest } from "@/stores";

interface IPlayer {
  play: Function;
  stop: Function;
  getOSDTime: Function;
  capturePicture: Function;
  openSound: Function;
  closeSound: Function;
  startSave: Function;
  stopSave: Function;
  startTalk: Function;
  stopTalk: Function;
  fullScreen: Function;
  destroy: Function;
}

const { getTokens } = useRequest();

let player: IPlayer;
const initCarmea = "1";
const dialogFormVisible = ref(false);
const formLabelWidth = "100px";

const form = reactive({
  camera: initCarmea,
  isRelook: false,
});

const play = () => {
  const playPromise = player.play();
  playPromise.then((data: any) => {
    console.log("promise 获取 数据", data);
  });
};

const stop = () => {
  const stopPromise = player.stop();
  stopPromise.then((data: any) => {
    console.log("promise 获取 数据", data);
  });
};

const getOSDTime = () => {
  const getOSDTimePromise = player.getOSDTime();
  getOSDTimePromise.then((data: any) => {
    console.log("promise 获取 数据", data);
  });
};

const capturePicture = () => {
  const capturePicturePromise = player.capturePicture(
    `${new Date().getTime()}`
  );
  capturePicturePromise.then((data: any) => {
    console.log("promise 获取 数据", data);
  });
};

const openSound = () => {
  const openSoundPromise = player.openSound();
  openSoundPromise.then((data: any) => {
    console.log("promise 获取 数据", data);
  });
};

const closeSound = () => {
  const openSoundPromise = player.closeSound();
  openSoundPromise.then((data: any) => {
    console.log("promise 获取 数据", data);
  });
};

const startSave = () => {
  const startSavePromise = player.startSave(`${new Date().getTime()}`);
  startSavePromise.then((data: any) => {
    console.log("promise 获取 数据", data);
  });
};

const stopSave = () => {
  const stopSavePromise = player.stopSave();
  stopSavePromise.then((data: any) => {
    console.log("promise 获取 数据", data);
  });
};

const ezopenStartTalk = () => {
  player.startTalk();
};

const ezopenStopTalk = () => {
  player.stopTalk();
};

const fullScreen = () => {
  player.fullScreen();
};

const destroy = () => {
  const destroyPromise = player.destroy();
  destroyPromise.then((data: any) => {
    console.log("promise 获取 数据", data);
  });
  player = null!;
};

const onConfirm = () => {
  init(form.camera, form.isRelook);
  // if (!form.isRelook) {
  //   location.reload();
  // }
  dialogFormVisible.value = false;
};

const init = (url: string, isRelook: boolean = false) => {
  if (player) {
    destroy();
  }

    getTokens().then(res => {
      player = new EZUIKit.EZUIKitPlayer({
    id: "video-container", // 视频容器ID
    accessToken: JSON.parse(res['msg']).data.accessToken,
    url: `ezopen://aa123456@open.ys7.com/FE9292620/${url}.${
      isRelook ? "cloud.rec" : "live"
    }`,
    // simple: 极简版; pcLive: pc直播; pcRec: pc回放; mobileLive: 移动端直播; mobileRec: 移动端回放;security: 安防版; voice: 语音版;
    template: isRelook ? "pcRec" : "441d3ac229a349f1ba658bfa19cf4f2c",
    // template: "pcRec",
    plugin: ["talk"], // 加载插件，talk-对讲
    language: "zh", // zh | en
    handleError: (err: any) => {
      console.error("handleError", err);
    },
    width: 800,
    height: 460,
    // staticPath: "/ezuikit_static", // 如果想使用本地静态资源，请复制根目录下ezuikit_static 到当前目录下， 然后设置该值
  });
  // @ts-ignore
  window.player = player;
    })


};

onMounted(() => {
  init("1");
});
</script>

<template>
  <div class="relative hello-ezuikit-js">
    <div class="absolute right-[10px] top-[40px] z-50">
      <el-button type="primary" :text="true" @click="dialogFormVisible = true">
        更多操作
      </el-button>
    </div>
    <div id="video-container"></div>
    <el-dialog v-model="dialogFormVisible" title="摄像头配置" width="600">
      <el-form :model="form">
        <el-form-item label="画面切换" :label-width="formLabelWidth">
          <el-select
            v-model="form.camera"
            placeholder="please select your zone"
          >
            <el-option label="摄像头1" value="1" />
            <el-option label="摄像头2" value="2" />

          </el-select>
        </el-form-item>
        <el-form-item label="回放查看" :label-width="formLabelWidth">
          <el-switch v-model="form.isRelook" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="onConfirm()"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
:deep(#mobile-ez-ptz-container){
  display: none !important;
}
</style>
