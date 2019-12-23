<template lang="pug">
  div.box
    img.icon(svg-inline='' src='@/assets/svgs/github-brands.svg')
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>

<style lang="sass" scoped>
.box
  width: 20rem
  height: 20rem
  border: solid 1px #e1e1e1
  border-radius: 50%
  padding: 1rem
  box-shadow: 1px 1px 2px 0px #a8a8a8
  transition: all 0.2s
  cursor: pointer

  &:hover
    transform: rotate(25deg) translate(-2px, -2px) scale(1.01, 1.01)
    box-shadow: 3px 3px 5px 2px #a8a8a8
</style>
