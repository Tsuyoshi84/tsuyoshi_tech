<template lang="pug">
section.container
  section#title.title
    div.title-wrapper
      div.primary TY
      div.secondary
        div.first Engineering
        div.second Laboratory
  section.menu
    div unko
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="sass" scoped>
.container
  margin: 0 auto

.title
  height: clamp(40rem, 100vh, 100rem)
  color: transparent
  background-clip: text
  -webkit-background-clip: text
  background-attachment: fixed
  background-image: url(~assets/images/top_background.jpg)
  display: flex
  justify-content: center
  align-items: center

  .title-wrapper
    font-family: 'Oswald', sans-serif
    display: flex
    justify-content: center
    align-items: center
    text-align: center

    .primary
      font-size: 30rem
      margin-right: 50px

    .secondary
      font-size: 12rem
      text-align: left
      display: flex
      flex-direction: column

      .first
        margin: 18px 0 8px

@-moz-document url-prefix()
  // Firefox has a bug:
  // When usign both background-clip:text and background-attachment:fixed at the same time, text does not move when scrolling.
  // To work around the problem, set background-attachment:scroll here.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1313757
  #title
    background-attachment: scroll

.menu
  height: 100vh
</style>
