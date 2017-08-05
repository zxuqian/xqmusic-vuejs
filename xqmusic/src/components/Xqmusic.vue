<template>
  <div class="frame">
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
                                <div class="songs">歌曲数<br />185</div>
                                <div class="separator"></div>
                                <div class="listens">收听数<br />1924</div>
                            </div>
                        </div>
                        <div class="creator">
                            <img src="../assets/logo.png" alt="" class="profile_img">
                            <div class="creator_name">雪灵杰</div>
                            <div class="create_date">2013-04-20创建</div>
                        </div>
                        <div class="actions">
                            <button>播放全部</button>
                            <button>收藏</button>
                            <button>分享</button>
                            <button>下载全部</button>
                        </div>
                        
                    </div>
                </div>
                <div class="playlist">
                    <div class="tabs_search">
                        <div class="tabs">
                            <div class="tab_playlist">歌曲列表</div>
                            <div class="tab_comments">评论(0)</div>
                            <div class="tab_favorites">收藏者</div>
                        </div>
                        <div class="search_box">
                            <input type="text" name="" placeholder="搜索歌单音乐" id="">
                        </div>
                    </div>                  
                    <table>
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
                                <td>01</td>
                                <td></td>
                                <td>Hanover</td>
                                <td>Fio Rida, Talo Cruz</td>
                                <td>Turn Up The Music - Your Summer Mix Tape 2013</td>
                                <td>03:42</td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td></td>
                                <td>Something Just Like This</td>
                                <td>The Chainsmokers, Coldplay</td>
                                <td>Something Just Like This</td>
                                <td>04:07</td>  
                            </tr>
                            <tr>
                                <td>03</td>
                                <td></td>
                                <td>Stitches</td>
                                <td>Shawn Mendes</td>
                                <td>BRIT Awards 2017</td>
                                <td>03:27</td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td></td>
                                <td>Girl Panic!</td>
                                <td>Duran Duran</td>
                                <td>All You Need Is Now</td>
                                <td>04:34</td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td></td>
                                <td>My Songs Know What You Did In The Dark(Light Em Up)</td>
                                <td>Fall Out Boy</td>
                                <td>My Songs Know What You Did In The Dark(Light Em Up)</td>
                                <td>03:08</td>
                            </tr>
                            <tr>
                                <td>06</td>
                                <td></td>
                                <td>Forever Starts Tonight</td>
                                <td>Tyler Ward</td>
                                <td>Honestly(Deluxe Version)</td>
                                <td>03:47</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="play_controls">
                <div class="controls">
                    <button class="back"></button>
                    <button class="pause_play"></button>
                    <button class="next"></button>
                </div>
                <div class="progressbar">  
                    This is progress bar
                </div>
                <div class="time">
                    <span class="current">02:42</span>/<span class="total">03:27</span>
                </div>
                <div class="volume_control">
                    This is volume control
                </div>
                <div class="actions">
                    <button class="circular"></button>
                    <button class="lyrics"></button>
                    <button class="playlist">122</button>
                </div>
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
    html, body, button, i, span, ul, li, p, h1 {
        margin: 0;
        padding: 0;
    }
    table {
        display: block;
    }
    body {
        width: 100%;
    }

    .frame {
        width: 100%;
        display: block;
    }

    header {
        width: 100%;
        height: 60px;
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
        color: #ffffff;
        font-size: 16px;
        font-weight: 200;
    }

    .history .left {
        border-radius: 5px 0px 0px 5px;
    }

    .history .right {
        margin-left: -5px;
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
    }

    /* sidebar area */
    .sidebar {
        width: 220px;
        min-width: 220px;
        border: 1px solid #dddddd;
        overflow-y: auto;
        min-height: 200px;
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

    .playlist {
        flex-flow: column;
    }

    .tabs_search {
        flex-flow: row;
    }

    /* Header part */
    /*
    header {
        background: rgb(170, 51, 25)
    }
    header div{
        display: inline-block;
        position: relative;
    }
    .logo_text {
        color: #FFFFFF;
        padding-left: 20px;
        padding-right: 50px;
    }
    .history {
        bottom: 0px;
    }
    .history button {
        margin: 0;
        padding: 0;
        width: 25px;
        height: 25px;
        border: 1px solid rgb(144, 37, 19);
        background: transparent;
        color: #ffffff;
        font-size: 16px;
        font-weight: 200;
    }
    .history .left {
        border-radius: 5px 0px 0px 5px;
    }
    .history .right {
        margin-left: -5px;
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
        position: absolute;
        top: 3px;
        left: 10px;
        color: rgb(184, 184, 184)
    }

    .header_right {
        width: 40%;
        text-align: right
    }

    .header_right div {
        margin-right: 30px;
    }

    .download, .message, .settings {
        color: #ffffff;
    }

    .download i {
        margin-left: 5px;
    }

    .profile {
        bottom: -5px;
        left: 20px;
    }
    .profile_img {
        width: 30px;
        height: 30px;
    }
*/




</style>

