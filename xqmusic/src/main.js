// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'
import fontAwesome from 'font-awesome-webpack'

/* Vuex store, should be moved to the store folder for better archtecture */
import musicList from '../data/musicList.json'
import user from '../data/user.json'
import playlistDetail from '../data/playlist_detail.json'

/* Audio library */
import { Howl } from 'howler'

/* for test purpose */
import audioFile from '../data/test.mp3'


Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    musicList,
    user,
    playlistDetail,
    currentPlaying: null,
    songInfo: null,
    progress: 0
  },
  mutations: {
    playOrPauseMusic(state) {
      if(state.currentPlaying == null){
        state.currentPlaying = new Howl({src: audioFile})
        
        state.currentPlaying.on('play', () => {
          var duration = state.currentPlaying.duration()
          console.log(duration)
          setInterval(() => {
            state.progress = (state.currentPlaying.seek() / duration) * 100
          }, 1000)
        })
        state.currentPlaying.play()
      } else if(!state.currentPlaying.playing()) {
         state.currentPlaying.play()
      } else {
        state.currentPlaying.pause()
      }
    },
    getSongInfo(state) {
      return songInfo;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
