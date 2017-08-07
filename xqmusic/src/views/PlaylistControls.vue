<template>
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
</template>
<script>
export default {
  name: 'playlistControl'
}
</script>
<style>
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
</style>

