<template>
  <div class="playlist">
    <div class="tabs_search">
        <div class="tabs">
            <div class="tab_playlist tab_active">歌曲列表</div>
            <div class="tab_comments">评论(0)</div>
            <div class="tab_favorites">收藏者</div>
        </div>
        <div class="search_box">
            <i class="fa fa-search" aria-hidden="true"></i><input type="text" name="" placeholder="搜索歌单音乐" id="">
        </div>
    </div>
    <div class="tab_separator"></div>    
    <div class = "playlist_table column">
        <div class="thead row">
            <div class="th">&nbsp;</div>
            <div class="th">操作</div>
            <div class="th">音乐标题</div>
            <div class="th">歌手</div>
            <div class="th">专辑</div>
            <div class="th">时长</div>
        </div>
        <div class="tbody column">
            <div v-for="(track, index) in tracks" :key="track.id" class="tr row" @dblclick="playMusic(track)">
                <div class="td">{{ ("0" + (index + 1)).slice(-2) }}</div>
                <div class="td">
                    <i class="fa fa-heart liked" aria-hidden="true"></i>
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                </div>
                <div class="td">{{ track.name }}</div>
                <div class="td">{{ track.ar | formatAuthor }}</div>
                <div class="td">{{ track.al.name }}</div>
                <div class="td">{{ track.dt | musicLength }}</div>
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
          return this.$store.state.playlistDetail.playlist.tracks
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
          this.$store.commit('playOrPauseMusic')
          //this.$store.state.songInfo = 
          if(this.$store.state.songInfo == null) {
              this.$store.state.songInfo = track
          }
          
      }
  },
  filters: {
      musicLength(dt) {
          let temp = new Date(dt);
          return ("0" + temp.getMinutes()).slice(-2) + ":" + ("0" + temp.getSeconds()).slice(-2);
      },
      formatAuthor(arArray) {
          return arArray.map((ar) => { return ar.name }).join(', ')
      }
  }
}
</script>
<style>
    .playlist {
        width: 100%;
    }

   /* tabs */
    .tabs {
        margin-left: 20px;
    }

    .tabs > div {
        padding: 5px 10px;
        border: 1px solid #cccccc;
        margin-right: 5px;
        border-bottom: none;
        background: #f3f3f3;
    }

    .tabs_search {
        flex-shrink: 0;
    }

    .tabs > .tab_active {
        background: rgb(170, 51, 25);
        color: white;
    }

    .tabs_search > .search_box {
        justify-content: flex-end;
        flex: 0.96;
    }

    .tabs_search > .search_box input {
        border-radius: 10px;
        border: 1px solid #cccccc;
        padding: 5px;
        padding-left: 30px;
        margin-left: 5px;
        width: 140px;
    }

    .tab_separator {
        border-top: 2px solid rgb(170, 51, 25);
    }

    /* playlist table */
    .playlist_table {
        border-collapse: collapse;
        width: 100%;
        font-size: 14px;
        flex-shrink: 0;
        
    }

    .playlist_table .thead {
        width: 100%;
    }

    .playlist_table .th:nth-child(2) {
        justify-content: center;
    }

    .playlist_table .tr > .td:nth-child(1) {
        text-align: right;
    }
    .playlist_table .tr > .td:nth-child(2), .playlist_table .th:nth-child(2) {
        text-align: center;
    }

    .playlist_table .th {
        color: #777777;
        font-size: 13px;
        text-align: left;
        border: 1px solid #e2e2e2;
        border-left: none;
    }

    .playlist_table .th, .playlist_table .td {
        padding: 3px;
        align-items: center;
    }

    .playlist_table .tbody {
        width: 100%;
    } 

    .playlist_table .tr {
        width: 100%;
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

    .playlist_table .tr:nth-child(odd) {
        background: #f2f2f2;
    }

    .playlist_table .tr > .td {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
    }

    .playlist_table .tr > .td:nth-child(2) i:nth-child(1).liked {
        color: rgb(200, 61, 63);
    }
    .playlist_table .tr > .td:nth-child(2) i:nth-child(2) {
        color: #cccccc;
        padding-left: 3px;
    }

    .playlist_table .tr > .td:nth-child(2) i:nth-child(2).downloaded {
        color: rgb(57, 157, 211);
    }
</style>
