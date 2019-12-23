<template lang="pug">
  div.box
    a.link-icon(:href="href")
      slot
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop() href!: string
}
</script>

<style lang="sass" scoped>
.box
  display: flex
  align-items: center
  justify-content: center
  width: 10rem
  height: 10rem
  border: solid 1px #eee
  border-radius: 50%
  padding: 1rem
  transition: all 0.2s
  cursor: pointer
  background-color: white
  fill: currentColor
  .link-icon
    color: #aaa

  &:hover
    transform: rotate(-15deg) translate(-2px, -2px) scale(1.1, 1.1)
    border: solid 1px #e1e1e1
    box-shadow: 4px 4px 4px 3px #a8a8a8

    .link-icon
      color: black
</style>
