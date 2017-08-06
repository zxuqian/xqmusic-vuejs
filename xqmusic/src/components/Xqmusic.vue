<template>
  <div class="frame column">
      <header>
        <div class="logo">
            <h1 class="logo_text">Qian音乐</h1>
        </div>
        <div class="history">
            <button class="left">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <button class="right">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
        </div>
        <div class="search_box">
            <i class="fa fa-search" aria-hidden="true"></i><input type="text" name="" id="search_input" placeholder="搜索音乐，歌手，歌词，用户">
        </div>
        <div class="header_right">
            <div class="download">
                <span>下载暂停<i class="fa fa-arrow-circle-down" aria-hidden="true"></i></span>
            </div>
            <div class="message">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div class="settings">
                <i class="fa fa-cog" aria-hidden="true"></i>
            </div>
        </div>

        <div class="separator"></div>

        <div class="profile">
            <img class="profile_img" src="../assets/logo.png" alt="">
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
    </header>
    <div class="wrapper column">
        <div class="main_content">
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
            <div class="music_area">
                <div class="music_list_container">
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
                        <table class="playlist_table">
                            <colgroup>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <thead>
                                <th></th>
                                <th>操作</th>
                                <th>音乐标题</th>
                                <th>歌手</th>
                                <th>专辑</th>
                                <th>时长</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div>01</div></td>
                                    <td>
                                        <div>
                                            <i class="fa fa-heart liked" aria-hidden="true"></i>
                                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                                        </div>
                                    </td>
                                    <td><div>Hanover</div></td>
                                    <td><div>Fio Rida, Talo Cruz</div></td>
                                    <td><div>Turn Up The Music - Your Summer Mix Tape 2013</div></td>
                                    <td><div>03:42</div></td>
                                </tr>
                                <tr>
                                    <td><div>02</div></td>
                                    <td>
                                        <div>
                                            <i class="fa fa-heart liked" aria-hidden="true"></i>
                                            <i class="fa fa-check-circle downloaded" aria-hidden="true"></i>
                                        </div>
                                    </td>
                                    <td><div>Something Just Like This</div></td>
                                    <td><div>The Chainsmokers, Coldplay</div></td>
                                    <td><div>Something Just Like This</div></td>
                                    <td><div>04:07</div></td>  
                                </tr>
                                <tr>
                                    <td><div>03</div></td>
                                    <td>
                                        <div>
                                            <i class="fa fa-heart liked" aria-hidden="true"></i>
                                            <i class="fa fa-check-circle downloaded" aria-hidden="true"></i>
                                        </div>
                                    </td>
                                    <td><div>Stitches</div></td>
                                    <td><div>Shawn Mendes</div></td>
                                    <td><div>BRIT Awards 2017</div></td>
                                    <td><div>03:27</div></td>
                                </tr>
                                <tr>
                                    <td><div>04</div></td>
                                    <td>
                                        <div>
                                            <i class="fa fa-heart liked" aria-hidden="true"></i>
                                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                                        </div>
                                    </td>
                                    <td><div>Girl Panic!</div></td>
                                    <td><div>Duran Duran</div></td>
                                    <td><div>All You Need Is Now</div></td>
                                    <td><div>04:34</div></td>
                                </tr>
                                <tr>
                                    <td><div>05</div></td>
                                    <td>
                                        <div>
                                            <i class="fa fa-heart liked" aria-hidden="true"></i>
                                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                                        </div>
                                    </td>
                                    <td><div>My Songs Know What You Did In The Dark(Light Em Up)</div></td>
                                    <td><div>Fall Out Boy</div></td>
                                    <td><div>My Songs Know What You Did In The Dark(Light Em Up)</div></td>
                                    <td><div>03:08</div></td>
                                </tr>
                                <tr>
                                    <td><div>06</div></td>
                                    <td>
                                        <div>
                                            <i class="fa fa-heart liked" aria-hidden="true"></i>
                                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                                        </div>
                                    </td>
                                    <td><div>Forever Starts Tonight</div></td>
                                    <td><div>Tyler Ward</div></td>
                                    <td><div>Honestly(Deluxe Version)</div></td>
                                    <td><div>03:47</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    
        <div class="play_controls">
            <div class="controls">
                <button class="back"><i class="fa fa-step-backward" aria-hidden="true"></i></button>
                <button class="pause_play"><i class="fa fa-play" aria-hidden="true"></i></button>
                <button class="next"><i class="fa fa-step-forward" aria-hidden="true"></i></button>
            </div>
            <div class="progressbar_container">  
                <div class="progressbar">
                    <div class="progress"></div>
                    <div class="indicator"><i class="fa fa-circle" aria-hidden="true"></i></div>
                </div>
                <div class="time">
                    <span class="current">02:42</span>/<span class="total">03:27</span>
                </div>
            </div>
            <div class="volume_control">
                <i class="fa fa-volume-up" aria-hidden="true"></i>
                <div class="progressbar">
                    <div class="progress"></div>
                    <div class="indicator"></div>
                </div>
            </div>
            <div class="actions">
                <button class="circular"><i class="fa fa-repeat" aria-hidden="true"></i></button>
                <button class="lyrics">词</button>
                <button class="playlist"><i class="fa fa-list" aria-hidden="true"></i><span>122</span></button>
            </div>
        </div>    
    </div>
    
  </div>
</template>


<script>
export default {
  name: 'Xqmusic'
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
        top: 60px;
    }

    /* header */
    header {
        width: 100%;
        height: 65px;
        background: rgb(170, 51, 25);
    }

    header, div {
        display: flex;
    }

    .logo, .history, .search_box, .header_right, .profile {
        display: flex;
        align-items: center;
    }

    .logo_text {
        color: #FFFFFF;
        padding-left: 20px;
        padding-right: 50px;
    }

    .history button {
        width: 25px;
        height: 25px;
        border: 1px solid rgb(144, 37, 19);
        background: transparent;
        font-size: 16px;
        font-weight: 200;
        box-shadow: 0px 0px 1px rgb(199, 97, 74);
    }

    .history button i {
        color: #ffffff;
    }

    .history .left {
        border-radius: 5px 0px 0px 5px;
    }

    .history .right {
        border-radius: 0px 5px 5px 0px;
    }

    #search_input {
        border-radius: 10px;
        border: none;
        padding: 5px;
        padding-left: 30px;
        margin-left: 5px;
        width: 230px;
    }

    .search_box .fa-search {
        position: relative;
        left: 30px;
        color: rgb(184, 184, 184);
    }

    .header_right {
        flex: 0.95;
        justify-content: flex-end;
    }

    .header_right * {
        padding-right: 12px;
        color: #ffffff;
    }

    .download {
        font-size: 14px;
    }

    .download i {
        padding-left: 10px;
    }

    .message, .settings {
        font-size: 18px;
    }

    .profile {
        justify-content: flex-end;
        padding-left: 10px;
    }

    .profile_img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #fefefe;
        border: 1px solid #cccccc;
    }

    .profile .fa-caret-down {
        margin-left: 8px;
        color: #ffffff;
        font-size: 12px;
    }

    .separator {
        align-self: stretch;
        border-left: 1px solid rgb(157, 26, 2);
        box-shadow: 1px 0px rgb(171, 67, 67);
    }

    .main_content {
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        height: 93%;
    }

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

    /* songs info and playlist */
    .music_area {
        flex-flow: column;
        width: 100%;
    }

    .music_list_container {
        flex-flow: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

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
        table-layout: fixed;
        width: 100%;
        display: table;
        font-size: 14px;
        
    }
    .playlist_table tr > td:nth-child(1) {
        text-align: right;
    }
    .playlist_table tr > td:nth-child(2) {
        text-align: center;
    }

    .playlist_table th {
        color: #777777;
        font-size: 13px;
        padding: 5px;
        text-align: left;
        padding-left: 10px;
    }

    .playlist_table th:nth-child(1) {
        width: 4%;
    }
    .playlist_table th:nth-child(2) {
        width: 6%;
    }
    .playlist_table th:nth-child(3) {
        width: 29%;
    }

    .playlist_table th:nth-child(4) {
        width: 18%;
    }

    .playlist_table th:nth-child(5) {
        width: 28%;
    }

    .playlist_table th:nth-child(6) {
        width: 13%;
    }

    .playlist_table th{
        border: 1px solid #e2e2e2;
        border-left: none;
    }
    .playlist_table tr:nth-child(odd) {
        background: #f2f2f2;
    }

    .playlist_table tr > td div {
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 3px;
    }

    .playlist_table tr > td:nth-child(2) i:nth-child(1).liked {
        color: rgb(200, 61, 63);
    }
    .playlist_table tr > td:nth-child(2) i:nth-child(2) {
        color: #cccccc;
    }

    .playlist_table tr > td:nth-child(2) i:nth-child(2).downloaded {
        color: rgb(57, 157, 211);
    }

    /* play controls */
    .play_controls {
        padding-top: 15px;
        padding-bottom: 10px;
        align-items: center;
        width: 100%;
        border-top: 1px solid #dddddd;
        justify-content: space-between;
        padding-bottom: 15px;
    }
    .controls {
        padding-left: 10px;
        align-items: center;
    }

    .controls > button {
        border-radius: 50px;
        width: 35px;
        height: 35px;
        margin-left: 20px;
        border: none;
        background: rgb(200, 61, 63);
    }

    .controls > button:nth-child(2) {
        width: 38px;
        height: 38px;
    }

    .controls > button > i {
        color: white;
        font-size: 16px;
        padding: 5px;
    }

    .progressbar_container {
        width: 50%;
        align-items: center;
    }

    .progressbar {
        width: 100%;
        height: 4px;
        border-radius: 5px;
        background: #aaaaaa;
        align-items: center;
    }

    .progress {
        width: 50%;
        height: 4px;
        background: rgb(200, 61, 63);
        border-radius: 5px;
        align-self: flex-start;
    }

    .indicator {
        width: 13px;
        height: 13px;
        background: white;
        border: 1px solid #cccccc;
        border-radius: 50px;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 1px #eeeeee;
    }

    .indicator i {
        font-size: 5px;
        color: rgb(200, 61, 63);
    }

    .time {
        padding-left: 10px;
        font-size: 12px;
        align-items: center;
    }

    .volume_control {
        width: 15%;
        align-items: center;
    }

    .volume_control .progressbar {
        margin-left: 8px;
    }

    .volume_control .progressbar .indicator {
        width: 10px;
        height: 10px;
    }

    .play_controls .actions button {
        padding-left: 15px;
        border: none;
        background: none;
        font-size: 16px;
    }

    .play_controls .actions button:nth-child(2) {
        border: 2px solid #777777;
        border-radius: 3px;
        padding: 0px 1px;
        margin-left: 15px;
        font-size: 12px;
        margin-left: 15px;

    }

    .play_controls .actions button:last-child {
        padding-right: 20px;
        display: flex;
        flex-flow: row;
    }

    .play_controls .actions button:last-child > span {
        background: #cccccc;
        color: white;
        border-radius: 10px;
        font-size: 10px;
        padding: 2px 5px;
        margin-left: 5px;
    }
    header, .wrapper {
        min-width: 1000px !important;
    }


</style>

