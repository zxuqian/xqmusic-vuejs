<template>
  <div class="frame column">
    <app-header></app-header>
    <div class="wrapper column">
        <div class="main_content">
            <sidebar></sidebar>
            <div class="music_area">
                <div class="music_list_container">
                    <playlist-info></playlist-info>
                    <playlist></playlist>
                </div>
                
            </div>
        </div>
        <playlist-controls></playlist-controls>
    </div>
    
  </div>
</template>


<script>
import appHeader from './Header.vue';
import sidebar from './Sidebar.vue';
import playlistInfo from './PlaylistInfo.vue';
import playlist from './Playlist.vue';
import playlistControls from './PlaylistControls';

export default {
  name: 'Xqmusic',
  components: {
      appHeader,
      sidebar,
      playlistInfo,
      playlist,
      playlistControls
  }
}
</script>

<style>
    /* common */
    html, body, button, i, span, ul, li, p, h1 {
        margin: 0;
        padding: 0;
    }
    table {
        display: block;
    }
    body, html {
        width: 100%;
        height: 100%;
    }

    header, .wrapper {
        min-width: 1000px !important;
    }

    * {
        color: rgb(51, 51, 51);
    }

    #app, .frame {
        width: 100%;
        height: 100%;
    }

    .row {
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
    }

    .column {
        flex-flow: column;
        align-items: flex-start;
        justify-content: center;
    }

    /* wrapper */
    .wrapper {
        overflow: hidden;
        justify-content: flex-start;
        height: 100%;
        width: 100%;
        top: 60px;
    }

    .main_content {
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        height: 93%;
    }

    /* songs info and playlist */
    .music_area {
        flex-flow: column;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    .music_list_container {
        flex-flow: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

</style>

