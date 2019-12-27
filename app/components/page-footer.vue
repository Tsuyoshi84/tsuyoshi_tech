<template lang="pug">
footer
  span
    | This site is using 
    a(href='https://fontawesome.com/license' alt='Font Awesome') Font Awesome 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>

<style lang="sass" scoped>
footer
  height: 6rem
  width: 100%
  padding: 2rem
  text-align: center
  color: #888
</style>
