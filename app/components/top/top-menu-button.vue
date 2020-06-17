<template lang="pug">
  button
    div.inner(:style="innerStyle")
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ default: '#fff' }) bgColor!: string

  innerStyle = { backgroundColor: this.bgColor }
}
</script>

<style scoped lang="scss">
button {
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 15px;

  div.inner {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
}
</style>
