<template lang="pug">
section.container
  div.item
    icon-link(alt="GitHub" color="#24292e" href="https://github.com/Tsuyoshi84")
      include ../assets/svgs/github.svg
  div.item
    icon-link(alt="Facebook" color="#4267b2" href="https://www.facebook.com/tsuyoshi.yamaguchi.1232")
      include ../assets/svgs/facebook.svg
  div.item
    icon-link(alt="Twitter" color="#1da1f2" href="https://twitter.com/tsuyoshi84")
      include ../assets/svgs/twitter.svg
  div.item
    icon-link(alt="Linkedin" color="#0077b5" href="https://www.linkedin.com/in/tsuyoshi-yamaguchi-94954a96")
      include ../assets/svgs/linkedin.svg
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IconLink from '~/components/icon-link.vue'

@Component({
  components: { IconLink },
  head: { title: 'Contact' },
})
export default class extends Vue {}
</script>

<style lang="sass" scoped>
.container
  margin: 0 auto
  min-height: 90vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

  .item
    margin: 1rem

svg
  height: 7rem
  width: 7rem
  display: block
  fill: currentColor
</style>
