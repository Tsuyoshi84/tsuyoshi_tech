<template lang="pug">
section
  navigation-bar
  main
    nuxt
    ts-footer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavigationBar from '~/components/navigation-bar.vue'
import TsFooter from '~/components/ts-footer.vue'

@Component({
  components: { NavigationBar, TsFooter }
})
export default class extends Vue {}
</script>

<style lang="sass" scoped>
.page-enter-active,
.page-leave-active
  transition-property: opacity
  transition-timing-function: ease-in-out
  transition-duration: 200ms

.page-enter,
.page-leave-to
  opacity: 0
</style>
