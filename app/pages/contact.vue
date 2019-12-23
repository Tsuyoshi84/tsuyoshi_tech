<template lang="pug">
section.container
  social-media-icon(color="#24292e" href="https://github.com/Tsuyoshi84")
    include ../assets/svgs/github-brands.svg
  social-media-icon(color="#4267b2" href="https://www.facebook.com/tsuyoshi.yamaguchi.1232")
    include ../assets/svgs/facebook-f-brands.svg
  social-media-icon(color="#1da1f2" href="https://twitter.com/tsuyoshi84")
    include ../assets/svgs/twitter-brands.svg
  social-media-icon(color="#0077b5" href="https://www.linkedin.com/in/tsuyoshi-yamaguchi-94954a96")
    include ../assets/svgs/linkedin-in-brands.svg
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SocialMediaIcon from '~/components/social-media-icon.vue'

@Component({ components: { SocialMediaIcon } })
export default class extends Vue {}
</script>

<style lang="sass" scoped>
.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

svg
  height: 7rem
  width: 7rem
  display: block
  fill: currentColor
</style>
