# Xqmusic
Xqmusic是一款本地音乐播放器，目前作为学习vuejs的练手项目。由于项目仍在开发中，因此会有很多不足之处，目前状态为：可以添加、播放、暂停本地音乐，并且支持进度条点击进行快进快退（暂不支持拖动），双击播放列表歌曲播放。

### 所用技术
- Vuejs 核心技术框架
- Electron-Vue 用于开发跨平台桌面应用的框架，整合了vue,详情见底部链接
- Vuex 用于vuejs状态管理
- Vue-router 用于vuejs路由功能
- Howler 音乐播放库
- Music-metadata 提取音乐id3信息

### 运行项目
此项目还未打包为可执行文件，所以需要用到npm手动运行，参考如下步骤

#### 编译步骤
``` bash
# 克隆本库
git clone https://github.com/zxuqian/vuejs/tree/master/xqmusic-electron

# 安装依赖
npm install

# 执行程序
npm run dev

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[99f0448](https://github.com/SimulatedGREG/electron-vue/tree/99f044896bf3add09d072e9f278ef9d8380337f4) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

