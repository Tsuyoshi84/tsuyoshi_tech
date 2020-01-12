<template lang="pug">
section.container
  div.item
    social-media-icon(alt="GitHub" color="#24292e" href="https://github.com/Tsuyoshi84")
      include ../assets/svgs/github.svg
  div.item
    social-media-icon(alt="Facebook" color="#4267b2" href="https://www.facebook.com/tsuyoshi.yamaguchi.1232")
      include ../assets/svgs/facebook.svg
  div.item
    social-media-icon(alt="Twitter" color="#1da1f2" href="https://twitter.com/tsuyoshi84")
      include ../assets/svgs/twitter.svg
  div.item
    social-media-icon(alt="Linkedin" color="#0077b5" href="https://www.linkedin.com/in/tsuyoshi-yamaguchi-94954a96")
      include ../assets/svgs/linkedin.svg
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SocialMediaIcon from '~/components/social-media-icon.vue'

@Component({
  components: { SocialMediaIcon },
  head: { title: 'Contact' }
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
