<template>
    <div class="playlist_info">
        <img :src="playlistDetail.coverImgUrl" width="175" height="175" alt="" class="album_img">
        <div class="playlist_detail">
            <div class="playlist_title">
                <!-- <span class="icon">播放列表</span> -->
                <h1>我喜欢的音乐</h1>
            </div>
            <div class="creator">
                <img :src="playlistDetail.creator.avatarUrl" alt="" class="profile_img">
                <div class="creator_name">创建人：{{ playlistDetail.creator.nickname }}</div>
                <div class="create_date">时间：{{ playlistDetail.createTime | formatDatetime }}</div>
            </div>
            <div class="actions">
                <button class="play_all"><i class="fa fa-play-circle-o" aria-hidden="true"></i>播放全部</button>
                <button class="add_music" @click="chooseMusic">+ 添加音乐</button>
            </div>
            
        </div>
    </div>
</template>
<script>
    import { remote } from 'electron'
    import fs from 'fs'

    var dialog = remote.dialog

    export default {
        name: 'playlistInfo',
        computed: {
            playlistDetail() {
                return this.$store.state.playlistDetail.playlist
            }
        },
        methods: {
            chooseMusic() {
                let paths = dialog.showOpenDialog({
                    properties: ['openFile', 'openDirectory', 'multiSelections'],
                    filters: [
                        { name: 'Music Files', extensions: ['mp3', 'flac', 'wav', 'ogg']}
                    ]
                })
                this.$store.dispatch('updateTracks', paths)
            }
        },
        filters: {
            formatDatetime(dateTime) {
                let theDate = new Date(dateTime)
                return theDate.getFullYear() + "-" + ("0" + ((theDate.getMonth() + 1))).slice(-2) + "-" + ("0" + (theDate.getDate())).slice(-2)
            }
        }
    }
</script>
<style lang="scss">
/* play list information */
    .playlist_info {
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        flex-shrink: 0;
    }

    .playlist_detail {
        align-items: flex-start;
        justify-content: space-between;
        flex-flow: column;
        width: 100%;
        padding-left: 40px;
    }
    
    .playlist_title {
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }

    /*.playlist_title .icon {
        background: $primary-color;
        font-size: 14px;
        color: #ffffff;;
        padding: 1px 8px;
        border-radius: 5px;
        display: block;
    }*/

    .playlist_title h1 {
        font-size: 24px;
        /* padding-left: 10px; */
    }

    .creator {
        align-items: center;
    }

    .creator > div {
        padding-left: 5px;
    }

    .playlist_detail .actions {
        margin-top: 20px;
    }

    .playlist_detail .actions > button {
        padding: 8px 25px;
        background: $primary-color;
        border-radius: 25px;
        border: none;
        margin-right: 10px;
        display: flex;
        align-items: center;
    }

    .playlist_detail .actions i {
        margin-right: 5px;
    }

    .playlist {
        flex-flow: column;
    }
</style>
