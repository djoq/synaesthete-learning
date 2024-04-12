<template>
  <div class="pitch">
    <h3 > {{ msg }} </h3>
    <p><b>Instructions: </b> Try to match the note to the color prior to the color appearing.</p>
    <h4> Score: {{ score.right }} / {{ score.right + score.wrong}}</h4>
    <div class="grid-container border">
      <div class="item1">
          <ui-button @click="start" color="primary" style="display: inline-flex;"> Start </ui-button>
          <hr/>

        <transition
            name="fade"
            @enter="enterEl"
            @leave="leaveEl"
            :css="false">
          <canvas id="canv" width="400" height="256" />
        </transition>
        <img src="/static/chakras.jpeg" width="400" />

        </div>
        <div class="item2">
          <ui-button color="red" @click="answer" id="C" > C </ui-button>
          <ui-button color="orange" @click="answer" id="D" > D </ui-button>
          <ui-button @click="answer" id="E" > E </ui-button>
          <ui-button color="green" @click="answer" id="F" > F </ui-button>
          <ui-button color="primary" @click="answer" id="G" > G </ui-button>
          <ui-button color="accent" @click="answer" id="A" > A </ui-button>
          <ui-button  @click="answer" id="B" > B </ui-button>
        </div>
      </div>
  </div>
</template>
<script>
import EaSynthesizer from '../util/EaSynthesizer.js'
import Key from './Key'
// import store from '../store'
// import { actions } from '../actions'
// const { fetch } = actions
export default {
  name: 'Pitch',
  components: { Key },
  data () {
    return {
      msg: 'Learning pitch through color associations',
      synthesizer: null,
      canvas: null,
      timer: null,
      note: null,
      playing: false,
      cmajcolors: [ '#F32F01', '#E38F04', '#FEF200', '#AAEC09', '#25A9EF', '#B43EF7', '#FB1EE5' ],
      cmajor: ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'],
      score: {right: 0, wrong: 0}
    }
  },
  methods: {
    /**
     * $emit tone to main view app to process if it matches
     * Play Sound tone
     * @ param  {[type]} tone [description]
     */
    keyPressed (tone) {
      this.$emit('keyPressed', tone)
      this.synthesizer.playTone(tone)
    },
    color () {
      document.getElementById('canv').style.opacity = 1
      this.canvas.fillStyle = this.cmajcolors[this.note]
      this.canvas.fillRect(0, 0, 400, 400)
    },
    game () {
      this.canvas.fillStyle = '#FFFFFF'
      this.canvas.fillRect(0, 0, 400, 400)
      this.note = Math.floor(Math.random() * 7)
      this.synthesizer.playTone(this.cmajor[this.note])
      // setTimeout(this.color, 4000)
      setTimeout(this.color, 2000)
    },
    play () {
      let d = new Date()
      this.timer = d.getTime()
      this.game()
    },
    start () {
      document.getElementById('canv').style.opacity = 0
      this.playing = true
      this.play()
    },
    answer (e) {
      let d = new Date()
      this.playing = false
      var t = d.getTime() - this.timer
      console.log('time to answer ->', t)
      console.log('chose ->', e.target.parentElement.id)
      if (this.cmajor[this.note].includes(e.target.parentElement.id)) {
        this.score.right += 1
      } else {
        this.score.wrong += 1
      }
      setTimeout(this.start, 2000)
    },
    enterEl (el, done) {
      // entrance animation
      done()
    },
    leaveEl (el, done) {
      // exit animation
      done()
    },
  },
  mounted () {
   //  this.$refs.keyboard.scrollLeft = 300
    var c = document.getElementById('canv')
    var ctx = c.getContext('2d')
    this.canvas = ctx
  },
  /**
   * On Created add a Synth to our keyboard
   */
  created () {
    this.synthesizer = new EaSynthesizer('triangle')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.keyboard {
  position: relative;
  background-color: var(--dark-color);
  display: flex;
  overflow: scroll;
  padding-top: 3px;
}
@media (min-width: 800px) {
  .keyboard {
    margin: 0 auto;
    width: 80%;
    padding: 5rem 0 1rem 0;
    border-left: 2rem solid var(--dark-color);
    border-right: 2rem solid var(--dark-color);
    margin-bottom: 2rem;
    border-radius: 5px;
  }
}
canvas {
  opacity : 0; transition: opacity 3s;
  opacity : 1; transition: opacity 1s;
}
#E {
  background: yellow;
}
#B {
  background: #FF7AFE;
}

</style>
