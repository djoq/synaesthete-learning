<template>
  <div :class="['key', type]"
       :data-tone="tone"
       @mousedown="onPressedKey"
       @touchstart="onPressedKey"
       @mouseup="onReleasedKey"
       @touchend="onReleasedKey"
  >
    <span v-if="tone === 'C3'"></span>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String },
    tone: { type: String }
  },
  methods: {
    onPressedKey ($event) {
      this.$emit('keyPressed', $event.target.dataset.tone)
    },
    onReleasedKey () {
      this.$emit('keyReleased')
    }
  }
}
</script>

<style lang="scss">
:root {
  --key-width: 2.5rem;
  --key-height: 10rem;
}
.key {
  position: relative;
  // C3 key circle mark
  span {
    display: block;
    width: 10px;
    height: 10px;
    background-color: black;
    bottom: 0.2rem;
    left: 1rem;
    position: absolute;
    border-radius: 50%;
  }
  &.white {
    flex: 0 0 var(--key-width);
    background-color: #faf5ed;
    height: var(--key-height);
    box-shadow: inset 0 1px 0px rgba(255, 255, 255, 1),
    inset 0 -1px 0px rgba(255, 255, 255, 1),
    inset 1px 0px 0px rgba(255, 255, 255, 1),
    inset -1px 0px 0px rgba(255, 255, 255, 1), 0 4px 3px rgba(0, 0, 0, 0.7),
    inset 0 -1px 0px rgba(255, 255, 255, 1),
    inset 1px 0px 0px rgba(255, 255, 255, 1),
    inset -1px -1px 7px rgba(0, 0, 0, 0.3), -3px 4px 6px rgba(0, 0, 0, 0.5);
    &:active {
      background-color: darken(#faf5ed, 5%);
    }
  }
  &.white + &.white {
    margin-left: 0.1rem;
  }
  &.black {
    flex: 0 0 calc(var(--key-width) / 2);
    background-color: black;
    border: 1px solid black;
    height: calc(var(--key-height) / 2);
    z-index: 10;
    margin: 0 calc((var(--key-width) / 4) * -1);
    &:active {
      background-color: lighten(black, 15%);
    }
  }
}
</style>
