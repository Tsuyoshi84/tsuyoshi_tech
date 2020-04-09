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
@mixin clip-background
  background-clip: text
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  background-size: 200% 100%
  background-position: 100%
  transition: background-position 275ms ease

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
    font-weight: 700
    color: #5d5d5d
    background: linear-gradient(to right, #3500f2, #3500f2 50%, #5d5d5d 50%)
    @include clip-background
    &.nuxt-link-exact-active
      background: linear-gradient(to right, #3500f2, #3500f2 50%, #6868d2 50%)
      @include clip-background
    &:hover, &.nuxt-link-exact-active:hover
      background-position: 0 100%
</style>
