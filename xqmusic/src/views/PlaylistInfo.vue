<template>
    <div class="playlist_info">
        <img src="../assets/playlist.jpeg" width="175" height="175" alt="" class="album_img">
        <div class="playlist_detail">
            <div class="playlist_title">
                <span class="icon">歌单</span><h1>我喜欢的音乐</h1>
                <div class="count">
                    <div class="songs column">
                        <span>歌曲数</span>
                        <b>85</b>
                    </div>
                    <div class="separator"></div>
                    <div class="listens column">
                        <span>收听数</span>
                        <b>1924</b>
                    </div>
                </div>
            </div>
            <div class="creator">
                <img src="../assets/logo.png" alt="" class="profile_img">
                <div class="creator_name">雪灵杰</div>
                <div class="create_date">2013-04-20创建</div>
            </div>
            <div class="actions">
                <button class="play_all"><i class="fa fa-play-circle-o" aria-hidden="true"></i>播放全部</button>
                <button class="add">+</button>
                <button><i class="fa fa-star-o" aria-hidden="true"></i>收藏(0)</button>
                <button><i class="fa fa-share-square-o" aria-hidden="true"></i>分享(0)</button>
                <button><i class="fa fa-download" aria-hidden="true"></i>下载全部</button>
            </div>
            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'playlistInfo'
    }
</script>
<style>
/* play list information */
    .playlist_info {
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
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

    .playlist_title .icon {
        background: rgb(170, 51, 25);
        font-size: 12px;
        color: white;
        padding: 1px 8px;
        border-radius: 5px;
    }

    .playlist_title h1 {
        font-size: 24px;
        padding-left: 10px;
    }

    .count {
        flex: 1;
        justify-content: flex-end;
    }

    .count * {
        font-style: italic;
        font-size: 14px;
    }
    songs, listens {
        align-items: center;
    }

    songs *, listens * {
        display: block;
    }

    .listens, .count > .separator {
        margin-left: 5px;
    }

    .count > .separator {
        border-color: #cccccc;
        box-shadow: none;
        transform: rotate(10deg);
    }

    .creator {
        align-items: center;
    }

    .creator > div {
        padding-left: 5px;
        font-size: 14px;
    }

    .creator .create_date {
        font-size: 12px;
        color: #444444;
    }

    .playlist_detail .actions {
        margin-top: 30px;
    }

    .playlist_detail .actions > button {
        padding: 5px 10px;
        font-size: 14px;
        background: #ffffff;
        border-radius: 5px;
        border: 1px solid #cccccc;
        margin-right: 10px;
        display: flex;
        align-items: center;
    }

    .playlist_detail .actions > .play_all {
        border-radius: 5px 0px 0px 5px;
    }

    .playlist_detail .actions > .add {
        border-radius: 0px 5px 5px 0px;
        border-left: none;
        margin-left: -10px;
    }

    .playlist_detail .actions i {
        margin-right: 5px;
        font-size: 16px;
    }

    .playlist_detail .actions > .play_all > i {
        color: rgb(170, 51, 25);
    }

    .playlist {
        flex-flow: column;
    }
</style>
