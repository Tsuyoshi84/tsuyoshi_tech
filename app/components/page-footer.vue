<template lang="pug">
footer
  a.code-link(href='https://github.com/Tsuyoshi84/tsuyoshi_tech' alt='Source code')
    include ../assets/svgs/github.svg
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>

<style lang="sass" scoped>
$font-color: #aaa

footer
  height: 6rem
  width: 100%
  padding: 2rem
  text-align: center
  color: $font-color

  .code-link
    width: 2rem
    height: 2rem
    display: inline-block
    color: $font-color
    
    svg
      fill: currentColor
</style>
