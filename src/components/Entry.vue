<template>
  <div class="entry">
    <h3> {{ msg }} </h3>
    <a href="/#/pitch-vue">Pitch Trainer</a>
  </div>
</template>

<script>

// import store from '../store'
// import { actions } from '../actions'
// const { fetch } = actions

export default {
  name: 'entry',
  data () {
    return {
      msg: 'Module List'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
