<template>
  <div class="analytics">
    <h3 > {{ msg }} </h3>
    <h4 class="page__demo-title">Select a report to view. </h4>

    <div class="page__demo-group">
      <ui-button has-dropdown :size="size">
        <div class="keen-docs__custom-popover-content" slot="dropdown">
          <p><b>Default Report </b> here!</p>
          <p>More reports available soon, here is the percentage correct!</p>
        </div>

        Click to select metric type
      </ui-button>
    </div>
    <canvas id="myChart"></canvas>

    <div>
      <h4> Saved Responses </h4>
      <li v-for="({ correct, wrong }, index) in data">
        {{ displayData(index, data) }}
      </li>

      <ui-button @click="clearStorage" color="primary" style="display: inline-flex;"> Clear Storage </ui-button>

    </div>
  </div>
  </template>
<script>

import {Chart} from 'chart.js'


// import store from '../store'
// import { actions } from '../actions'
// const { fetch } = actions

export default {
  name: 'analytics',
  data () {
    return {
      msg: 'Analytics',
      data: window.localStorage
    }
  },
  methods: {
    displayDate (date) {
      var t = new Date(1970, 0, 1) // Epoch
      t.setSeconds(date)
      return t
    },

    displayData (index, data) {
      let output = JSON.parse(data.getItem(index))
      output.endedAt = index
      return output
    },
    clearStorage () {
      window.localStorage.clear()
      this.data = []
    },
    drawChart () {
      console.log('drawChart')
    }
  },
  components: {Chart},
  mounted () {
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(this.data).map(this.displayDate),
        datasets: [{
          label: 'Percent Perfect Pitch',
          data: Object.keys(this.data).map((result) => {
            let score = JSON.parse(this.data[result])
            return score.correct / (score.correct + score.wrong) * 100
          }),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
}
</script>
