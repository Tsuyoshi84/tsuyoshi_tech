<template lang="pug">
  div.box
    slot
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>

<style lang="sass" scoped>
.box
  display: flex
  align-items: center
  justify-content: center
  width: 10rem
  height: 10rem
  border: solid 1px #e1e1e1
  border-radius: 50%
  padding: 1rem
  box-shadow: 1px 1px 2px 0px #a8a8a8
  transition: all 0.2s
  cursor: pointer
  background-color: white
  color: #aaa
  fill: currentColor

  &:hover
    transform: rotate(-15deg) translate(-2px, -2px) scale(1.1, 1.1)
    box-shadow: 4px 4px 4px 3px #a8a8a8
    color: black
</style>
