<template>
    <div class="play_controls">
        <div class="controls">
            <button class="back"><i class="fa fa-step-backward" aria-hidden="true"></i></button>
            <button class="pause_play" @click="playOrPause"><i :class="playButtonClass" aria-hidden="true"></i></button>
            <button class="next"><i class="fa fa-step-forward" aria-hidden="true"></i></button>
        </div>
        <div class="progressbar_container">  
            <div class="progressbar" @click="seekMusic">
                <div class="progress" :style="progress"></div>
                <div class="indicator"><i class="fa fa-circle" aria-hidden="true"></i></div>
            </div>
            <div class="time">
                <span class="current">{{ currentDuration }}</span>/<span class="total">{{ totalDuration }}</span>
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
  name: 'playlistControl',
  data: function() {
      return {
          offsetProgress: 0
      }
  },
  methods: {
    isPlaying() {
        if(this.$store.state.currentPlaying != null && this.$store.state.currentPlaying.playing()) {
            return true;
        } else {
            return false;
        }
    },
    playOrPause() {
        this.$store.commit('playOrPauseMusic')
    },
    seekMusic(event) {
        // Get the percentage of clicked x coordinate to the progress bar width, remove the width of the indicator
        // 7 is half width of the indicator, for centering the indicator in the progress bar when the mouse clicked.
        let percentage = (event.pageX - event.currentTarget.offsetLeft) / event.currentTarget.offsetWidth
        this.$data.offsetProgress = 7 / event.currentTarget.offsetWidth * 100
        this.progress = percentage * 100

    },
    getTimeString(duration) {
        let minute = ('0' + Math.floor(duration / 60)).slice(-2)
        let second = ('0' + Math.trunc(duration % 60)).slice(-2)
        return minute + ':' + second
    }
  },
  computed: {
      playButtonClass() {
          if(this.isPlaying()) {
              return 'fa fa-pause';
          } else {
              return 'fa fa-play';
          }
      },
      totalDuration() {
          let total = this.$store.state.duration
          return this.getTimeString(total)
      },
      currentDuration() {
          let total = this.$store.state.duration
          return this.getTimeString(total * this.$store.state.progress / 100)
      },
      progress: {
          get: function() {
              return { width: this.$store.state.progress + this.$data.offsetProgress + '%' }
          },
          set: function(percentage) {
              this.$store.state.progress = percentage;
              this.$store.commit('seekMusic')
          }           
      }
  }
}
</script>
<style lang="scss">
    /* play controls */
    .play_controls {
        padding-top: 15px;
        padding-bottom: 10px;
        align-items: center;
        width: 100%;
        background: $main-background + #111111;
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
        border: 1px solid $border-color-lighter;
        background: none;
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
        /* compensate the indicator's margin */
        margin-left: 13px;
        border-radius: 5px;
        background: #aaaaaa;
        align-items: center;
    }

    .progress {
        height: 4px;
        background: $primary-color;
        border-radius: 5px;
        align-self: flex-start;
    }

    .indicator {
        width: 13px;
        height: 13px;
        margin-left: -13px;
        background: white;
        border: 1px solid #cccccc;
        border-radius: 50px;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 1px #eeeeee;
    }

    .indicator i {
        font-size: 5px;
        color: $primary-color;
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
        margin-left: 18px;
    }

    .volume_control .progressbar .indicator {
        width: 10px;
        height: 10px;
        margin-left: -10px;
    }

    .volume_control .progress {
        width: 100%;
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

