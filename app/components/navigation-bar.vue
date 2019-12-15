<template lang="pug">
  header.header
    nuxt-link(to='/') About
    nuxt-link(to='/experience') Experience
    nuxt-link(to='/skills') Skills
    nuxt-link(to='/projects') Projects
    nuxt-link(to='/contact') Contact
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>


<style lang="sass" scoped>
.header
  display: flex
</style>