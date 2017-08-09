<template>
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
            <img class="profile_img" :src="user.profile.avatarUrl" alt="">
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'appHeader',
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style>
    /* header */
    header {
        width: 100%;
        height: 65px;
        padding-top: 10px;
        background: rgb(170, 51, 25);
        -webkit-app-region: drag;
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
</style>