<template lang="pug">
  header.header
    nuxt-link.link(to='/') About
    nuxt-link.link(to='/experience') Experience
    nuxt-link.link(to='/skills') Skills
    nuxt-link.link(to='/projects') Projects
    nuxt-link.link(to='/contact') Contact
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>


<style lang="sass" scoped>
.header
  display: flex
  justify-content: center
  padding-top: 1.5rem
  padding-bottom: 1.5rem
  border-bottom: 1px solid #eee
  transition: color 0.4s ease

  .link
    margin: 0 1rem
    font-size: 2.0rem
    color: #5d5d5d
    &:hover
      color: #2d2d2d
    &.nuxt-link-exact-active
      color: #160fca
</style>