<template lang="pug">
section
  page-header
  main
    nuxt
  page-footer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageHeader from '~/components/page-header.vue'
import PageFooter from '~/components/page-footer.vue'

@Component({
  components: { PageHeader, PageFooter },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 200ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
