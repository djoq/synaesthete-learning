<template>
  <div class="analytics">
    <h3 > {{ msg }} </h3>
    <div>
      {{ data }}
      <li v-for="({ correct, wrong }, index) in data">
        {{index}}{{ JSON.parse(data.getItem(index)) }}
      </li>
    </div>

  </div>
</template>

<script>

// import store from '../store'
// import { actions } from '../actions'
// const { fetch } = actions

export default {
  name: 'analytics',
  data () {
    return {
      msg: 'Analytics',
      data: window.localStorage,

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
