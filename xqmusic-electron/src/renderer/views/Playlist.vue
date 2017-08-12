<template>
  <div class="playlist">
    <div class = "playlist_table column">
        <div class="thead row">
            <div class="th">&nbsp;</div>
            <div class="th">&nbsp;</div>
            <div class="th">音乐标题</div>
            <div class="th">歌手</div>
            <div class="th">专辑</div>
            <div class="th">时长</div>
        </div>
        <div class="tbody column">
            <div v-for="(track, index) in tracks" :key="track.id" class="tr row" @dblclick="playMusic(track)">
                <div class="td">&nbsp;</div>
                <div class="td">
                    <i class="fa fa-heart liked" aria-hidden="true"></i>
                </div>
                <div class="td">{{ track.title }}</div>
                <div class="td">{{ track.artists | formatArtists }}</div>
                <div class="td">{{ track.album }}</div>
                <div class="td">{{ track.duration | duration }}</div>
            </div>
        </div>    
    </div>            
</div>
</template>
<script>

/* for test purpose */
//import audioFile from '../../data/test.mp3'

export default {
  name: 'playlist',
  data: function() {
      return {
          //sound: new Howl({src: audioFile})
      }
  },
  computed: {
      tracks() {
          return this.$store.state.tracks
      }
  },
  methods: {
      playMusic(track) {
          //let sound = this.$data.sound
          //if(sound.playing()) {
          //    sound.pause()
          //} else {
          //    sound.play()      
          //}
          this.$store.commit('updateCurrentPlayingIndex', track.id)
      }
  },
  filters: {
      duration(duration) {
          let minute = ('0' + Math.floor(duration / 60)).slice(-2)
          let second = ('0' + Math.trunc(duration % 60)).slice(-2)
          return minute + ":" + second;
      },
      formatArtists(arArray) {
          return arArray.map((ar) => { return ar }).join(', ')
      }
  }
}
</script>
<style lang="scss">
    .playlist {
        width: 100%;
    }

    /* playlist table */
    .playlist_table {
        border-collapse: collapse;
        width: 100%;
        font-size: 14px;
        flex-shrink: 0;

        .thead {
            width: 100%;
        }

        .th {
            font-size: 13px;
            text-align: left;
        }

        .th, .td {
            padding: 3px;
            align-items: center;
            vertical-align: middle;
            border-bottom: 1px solid $border-color;
            height: 30px;
        }

        .tbody {
            width: 100%;
        } 

        .tr {
            width: 100%;
        }

        .th:nth-child(2) {
            justify-content: center;
        }

        .tr > .td:nth-child(1) {
            text-align: right;
        }
        .tr > .td:nth-child(2), .playlist_table .th:nth-child(2) {
            text-align: center;
        }

        
        .thead .th:nth-child(1), .tr .td:nth-child(1) {
            width: 4%;
        }
        .thead .th:nth-child(2), .tr .td:nth-child(2) {
            width: 6%;
        }
        .thead .th:nth-child(3), .tr .td:nth-child(3) {
            width: 29%;
        }

        .thead .th:nth-child(4), .tr .td:nth-child(4) {
            width: 18%;
        }

        .thead .th:nth-child(5), .tr .td:nth-child(5) {
            width: 28%;
        }

        .thead .th:nth-child(6), .tr .td:nth-child(6) {
            width: 13%;
        }

        /*.playlist_table .tr:nth-child(odd) {
            background: #f2f2f2;
        } */

        .tr > .td {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 30px;
            display: block;
        }

        .tr > .td:nth-child(2) i:nth-child(1).liked {
            color: rgb(200, 61, 63);
        }
        .tr > .td:nth-child(2) i:nth-child(2) {
            color: #cccccc;
            padding-left: 3px;
        }

        .tr > .td:nth-child(2) i:nth-child(2).downloaded {
            color: rgb(57, 157, 211);
        }
        
    }


    
</style>
