<template>
  <div class="pitch">
    <h3 > {{ msg }} </h3>
    <canvas id="canv" />
    <img src="/static/chakras.jpeg" width="200" />
    <button @click="start"> Play </button>
    <hr />
    <div>
      <button @click="answer" id="C" > C </button>
      <button @click="answer" id="D" > D </button>
      <button @click="answer" id="E" > E </button>
      <button @click="answer" id="F" > F </button>
      <button @click="answer" id="G" > G </button>
      <button @click="answer" id="A" > A </button>
      <button @click="answer" id="B" > B </button>

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
  name: 'pitch',
  components: { Key },
  data () {
    return {
      msg: 'pitch',
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
      this.canvas.fillStyle = this.cmajcolors[this.note]
      this.canvas.fillRect(0, 0, 150, 75)
    },
    game () {
      this.canvas.fillStyle = '#FFFFFF'
      this.canvas.fillRect(0, 0, 150, 75)
      this.note = Math.floor(Math.random() * 7)
      this.synthesizer.playTone(this.cmajor[this.note])
      setTimeout(this.color, 4000)
    },
    play () {
      let d = new Date()
      this.timer = d.getTime()
      this.game()
     // while (this.playing) {

      // }
    },
    start () {
      this.playing = true
      this.play()
    },
    answer (e) {
      let d = new Date()
      console.log('time to answer ->', d.getTime() - this.timer)
      if (this.cmajor[this.note].includes(e.target.id)) {
        this.score.right += 1
      } else {
        this.score.wrong += 1
      }
    }
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
</style>
