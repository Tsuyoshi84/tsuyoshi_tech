<template lang="pug">
section.container
  h1.title Projects
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  head: { title: 'Projects' },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
