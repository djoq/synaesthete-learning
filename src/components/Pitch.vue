<template>
  <div class="pitch">
    <h3 > {{ msg }} </h3>
    <p><b>Instructions: </b> Try to match the note to the color prior to the color appearing.</p>
    <h4> Score: {{ score.correct }} / {{ score.correct + score.wrong }}</h4>
    <div class="grid-container border">
      <div class="item1">
          <ui-button @click="start" color="primary" style="display: inline-flex;"> Start </ui-button>
          <ui-button @click="pause" color="orange" style="display: inline-flex;"> {{pauseOrResume}} </ui-button>
          <ui-button @click="end" color="red" style="display: inline-flex;"> End and Save </ui-button>
        <hr/>

        <transition
            name="fade"
            @enter="enterEl"
            @leave="leaveEl"
            :css="false">
          <canvas id="canv" width="400" height="259" />
        </transition>
        <img :src="rootPath + 'static/chakras.jpeg'" width="400" />

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
      paused: false,
      pauseOrResume: 'Pause',
      cmajcolors: [ '#F32F01', '#E38F04', '#FEF200', '#AAEC09', '#25A9EF', '#B43EF7', '#FB1EE5' ],
      cmajor: ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'],
      score: { correct: 0, wrong: 0, startedAt: 0, endedAt: 0, answers: [] },
      rootPath: process.env.NODE_ENV === 'production' ? '/synaesthete-learning/' : '/'
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
      if (this.playing) {
        this.synthesizer.playTone(tone)
      }
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
      setTimeout(this.color, 2000)
    },
    play () {
      let d = new Date()
      this.timer = d.getTime()
      this.game()
    },
    start () {
      document.getElementById('canv').style.opacity = 0
      if (!this.paused) {
        this.playing = true
        this.play()
<<<<<<< HEAD
        this.score.startedAt = new Date().getTime()
=======
>>>>>>> 17ab48d... pause, record scores
      }
    },
    pause () {
      this.paused = !this.paused
      if (this.paused) {
        this.pauseOrResume = 'Resume'
      } else {
        this.start()
        this.pauseOrResume = 'Pause'
      }
    },
    end () {
<<<<<<< HEAD
      let timeOfGame = new Date().getTime()
      this.playing = false
=======
      let timeOfGame = new Date().getTime() / 1000
>>>>>>> 17ab48d... pause, record scores
      window.localStorage.setItem(timeOfGame, JSON.stringify(this.score))
    },
    answer (e) {
      this.playing = false
      if (this.cmajor[this.note].includes(e.target.parentElement.id)) {
        this.score.correct += 1
      } else {
        this.score.wrong += 1
      }
      this.score.answers.push({
        selectedNote: e.target.parentElement.id,
        correctNote: this.cmajor[this.note],
        timeAnswered: new Date().getTime()
      })
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

