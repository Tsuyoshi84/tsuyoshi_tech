<template lang="pug">
section
  navigation-bar
  main
    nuxt
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavigationBar from '~/components/navigation-bar.vue'

@Component({
  components: { NavigationBar }
})
export default class extends Vue {}
</script>
