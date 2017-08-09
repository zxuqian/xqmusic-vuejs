import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

import App from './App'
import router from './router'

import 'font-awesome-webpack'

/* Vuex store, should be moved to the store folder for better archtecture */
import musicList from '../data/musicList.json'
import user from '../data/user.json'
import playlistDetail from '../data/playlist_detail.json'

/* Audio library */
import { Howl } from 'howler'

/* for test purpose */
import audioFile from '../data/test.mp3'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    musicList,
    user,
    playlistDetail,
    currentPlaying: null,
    currentDuration: '00:00',
    songInfo: null,
    duration: 0,
    progress: 0
  },
  mutations: {
    playOrPauseMusic(state) {
      if(state.currentPlaying == null){
        state.currentPlaying = new Howl({src: audioFile})
        
        // Set interval, for progress bar to be updated
        var intervalId = -1;
        state.currentPlaying.on('play', () => {
          state.duration = state.currentPlaying.duration()
          // move the progress immediate for once
          state.progress = (state.currentPlaying.seek() / state.duration) * 100

          // Then move every second
          intervalId = setInterval(() => {
            state.progress = (state.currentPlaying.seek() / state.duration) * 100
          }, 1000)
        })
        state.currentPlaying.on('pause', () => {
          if(intervalId != -1) {
            // When paused, clear the interval
            clearInterval(intervalId)
          }
        })
        state.currentPlaying.play()
      } else if(!state.currentPlaying.playing()) {
         state.currentPlaying.play()
      } else {
        state.currentPlaying.pause()
      }
    },
    seekMusic(state) {
      state.currentPlaying.seek(state.progress * state.duration / 100)
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

