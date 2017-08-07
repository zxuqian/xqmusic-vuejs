<template>
    <section class="sidebar">
        <div class="sidebar_top">
            <ul>
                <li>
                    <span>推荐</span>
                    <ul>
                        <li><i class="fa fa-music" aria-hidden="true"></i>发现音乐</li>
                        <li><i class="fa fa-podcast" aria-hidden="true"></i>私人FM</li>
                        <li><i class="fa fa-youtube-play" aria-hidden="true"></i>MV</li>
                        <li><i class="fa fa-users" aria-hidden="true"></i>朋友</li>
                    </ul>
                </li>
                <li>
                    <span>我的音乐</span>
                    <ul>
                        <li><i class="fa fa-music" aria-hidden="true"></i>iTunes音乐</li>
                        <li><i class="fa fa-download" aria-hidden="true"></i>下载的音乐</li>
                    </ul>
                </li>
                <li>
                    <span>创建的歌单</span>
                    <ul>
                        <li><i class="fa fa-heart" aria-hidden="true"></i>我喜欢的音乐</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>健身专用</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>旧台式机</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>20160206</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>王萌</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>老友记</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>中文歌</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>欧美流行音乐，让心灵澎湃</li>
                    </ul>
                </li>
                <li>
                    <span>收藏的歌单</span>
                    <ul>
                        <li><i class="fa fa-music" aria-hidden="true"></i>好久不见，陪我长大的华语乐坛</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>100首经典英文老歌</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>德国北部普勒录音室`发烧音质</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>前奏秒杀一切</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>磁性，沧桑</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>那些年最迷人的声音</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="sidebar_bottom">
            <img src="../assets/album.jpg" width="65" height="65" alt="">
            <div class="song_info">
                <p>Hanover</p>
                <p>Fio Rida, Taio Cruz</p>
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
        data:  function() {
            return {
                musicListCreatedProp: this.$store.state.musicListCreatedProp
            }
        }
    }
</script>

<style>
/* sidebar area */
    .sidebar {
        width: 220px;
        min-width: 220px;
        border: 1px solid #dddddd;
        border-bottom: none;
        height: 100%;
        display: flex;
        flex-flow: column;
    }

    .sidebar_top {
        height: 100%;
        overflow: auto;
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
        border-top: 1px solid #dddddd;
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