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
</template>
<script>
export default {
  name: 'playlist'
}
</script>
<style>
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
</style>
