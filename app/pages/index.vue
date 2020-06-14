<template lang="pug">
section.container
  div#title.title
    div.wrapper
      div.primary TY
      div.secondary
        div.first Engineering
        div.second Laboratory
  section.menu
    div.grid-container
      top-menu-button(bg-color="#2994FF")
      top-menu-button(bg-color="#E23C41")
      top-menu-button(bg-color="#111111")
      top-menu-button(bg-color="#6DBFBC")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopMenuButton from '~/components/top/top-menu-button.vue'

@Component({
  components: { TopMenuButton },
})
export default class extends Vue {}
</script>

<style lang="sass" scoped>
@import '~/css/_variable.sass'

.container
  margin: 0 auto

.title
  height: clamp(40rem, 100vh, 100rem)
  color: rgba(0, 0, 0, 0.2)
  background-clip: text
  -webkit-background-clip: text
  background-attachment: fixed
  background-image: url(~assets/images/top_background.jpg)
  display: flex
  justify-content: center
  align-items: center

  .wrapper
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

.no-webp .title
  background-image: url(~assets/images/top_background.jpg)

.webp .title
  background-image: url(~assets/images/top_background.webp)

@media #{$width-tablet}
  .title
    .wrapper
      flex-direction: column

      .primary
        font-size: 30rem
        margin-right: 0

      .secondary
        text-align: center
        font-size: 12rem

@media #{$width-mobile}
  .title
    .wrapper
      flex-direction: column

      .primary
        font-size: 20rem

      .secondary
        font-size: 8rem

@-moz-document url-prefix()
  // Firefox has a bug:
  // When usign both background-clip:text and background-attachment:fixed at the same time, text does not move when scrolling.
  // To work around the problem, set background-attachment:scroll here.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1313757
  #title
    background-attachment: scroll

.menu
  width: 700px
  height: 500px
  margin: 0 auto

  .grid-container
    height: 100%
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr
    gap: 20px 30px
    grid-template-areas: ". ." ". ."

@media #{$width-mobile}
  .menu
    width: 300px
    height: 1000px

    .grid-container
      grid-template-columns: 1fr
      grid-template-rows: 1fr 1fr 1fr 1fr
      grid-template-areas: "." "." "." "."
</style>
