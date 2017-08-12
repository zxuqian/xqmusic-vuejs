import Vue from 'vue'
import Vuex from 'vuex'

//import modules from './modules'

/* Vuex store, should be moved to the store folder for better archtecture */
import musicList from '../../data/musicList.json'
import user from '../../data/user.json'
import playlistDetail from '../../data/playlist_detail.json'

/* music meta data */
import * as mm from 'music-metadata'

Vue.use(Vuex)

export default new Vuex.Store({
  //modules,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    src: Array(),
    tracks: Array(),
    user,
    total: 0,
    playlistDetail,
    currentPlayingIndex: -1
  },
  mutations: {
    updateCurrentPlayingIndex(state, index) {
      state.currentPlayingIndex = index
    },
    updateTracks(state, metadata) {
      let info = metadata.common
      let track = {
          id: metadata.id,
          path: metadata.path,
          title: info.title == null ? metadata.path.split('/').pop() : info.title,
          album: info.album == null ? 'unknown' : info.album,
          artists: info.artists == null ? ['unkown'] : info.artists,
          duration: metadata.format.duration,
          img: info.picture
      }
      state.tracks.push(track)
      state.total++
    }
  },
  actions: {
    updateTracks(context, paths) {
      paths.forEach((value, index) => {
          mm.parseFile(value, {native: false, duration: true})
              .then(function (metadata) {
                  //console.log(metadata)
                  metadata.path = value
                  metadata.id = context.state.total
                  context.commit('updateTracks', metadata)
                  //context.commit('updateCurrentPlayingIndex', 0)
                  
              })
              .catch(function (err) {
                  console.error(err.message);
              });
      })
    }
  }
})
