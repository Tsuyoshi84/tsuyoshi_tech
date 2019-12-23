<template>
  <section class="container">
    <social-media-icon>
      <img
        class="icon"
        svg-inline
        alt="github"
        src="@/assets/svgs/github-brands.svg"
      /> </social-media-icon
    ><social-media-icon>
      <img
        class="icon"
        svg-inline
        alt="facebook"
        src="@/assets/svgs/facebook-f-brands.svg"
      /> </social-media-icon
    ><social-media-icon>
      <img
        class="icon"
        svg-inline
        alt="twitter"
        src="@/assets/svgs/twitter-brands.svg"
      /> </social-media-icon
    ><social-media-icon>
      <img
        class="icon"
        svg-inline
        alt="linked in"
        src="@/assets/svgs/linkedin-in-brands.svg"
      />
    </social-media-icon>
  </section>
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

.title
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.icon
  height: 85%
  width: 85%
  fill: currentColor
</style>
