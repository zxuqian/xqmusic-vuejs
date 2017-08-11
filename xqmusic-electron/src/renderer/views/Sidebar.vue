<template>
    <section class="sidebar">
        <div class="sidebar_top">
            <ul>
                <li>
                    <span>库</span>
                    <ul>
                        <li><i class="fa fa-music" aria-hidden="true"></i>最近播放</li>
                        <li><i class="fa fa-download" aria-hidden="true"></i>本地音乐</li>
                    </ul>
                </li>
                <li>
                    <span>播放列表</span>
                    <ul>
                        <li><i  class="fa fa-heart" aria-hidden="true"></i>我喜欢的音乐</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="sidebar_bottom">
            <img :src="albumPic" width="65" height="65" alt="">
            <div class="song_info">
                <p>{{ musicName }}</p>
                <p>{{ author }}</p>
            </div>
            <div class="actions">
                <i class="fa fa-share-square-o" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'sidebar',
        computed: {
            musicListCreatedByMe() {
                return this.$store.state.musicList.playlist.filter((playlist) => {
                    return playlist.subscribed == false;
                })
            },
            musicListFavoratedByMe() {
                return this.$store.state.musicList.playlist.filter((playlist) => {
                    return playlist.subscribed == true;
                })
            },
            albumPic() {
                if(this.$store.state.songInfo != null) {
                    return this.$store.state.songInfo.al.picUrl
                }
            },
            musicName() {
                if(this.$store.state.songInfo != null) {
                    return this.$store.state.songInfo.name
                }
            },
            author() {
                if(this.$store.state.songInfo != null) {
                    return this.$store.state.songInfo.ar.map((ar) => { return ar.name }).join(', ')
                }
            }
        }
    }
</script>

<style lang="scss">
/* sidebar area */
    .sidebar {
        width: $logo_siderbar_width;
        min-width: 220px;
        height: 100%;
        display: flex;
        flex-flow: column;
    }

    .sidebar_top {
        height: 100%;
        overflow: auto;
        border-right: 1px solid #464646;
        box-shadow: 1px 0px #000000;
    }

    .sidebar_top ul {
       padding-left: 15px;
    }

    .sidebar_top ul li {
        list-style: none;
        font-size: 14px;
    }
    .sidebar_top ul li i {
        padding-right: 10px;
    }

    .sidebar_top > ul {
        padding-top: 5px;
    }

    .sidebar_top > ul > li > ul > li {
        padding-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 180px;
    }

    .sidebar_top > ul > li > ul {
        padding-bottom: 15px;
    }

    .sidebar_bottom {
        align-items: center;
    }

    .sidebar_bottom > img {
        border-radius: 5px;
        padding: 10px;
    }

    .song_info {
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .song_info > p {
        width: 100px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .song_info > p:first-child {
        color: #000000;
    }

    .song_info > p:last-child {
        font-size: 12px;
    }

    .sidebar_bottom .actions {
        padding-left: 15px;
        flex-flow: column;
        align-items: flex-start;
    }

    .sidebar_bottom .actions i:last-child {
        color: rgb(217, 21, 23);
    }

    .sidebar_bottom .actions i:first-child {
        color:#777777;
        padding-bottom: 5px;
    }
</style>