<template lang="pug">
  div.box(@mouseover="isHover = true" @mouseleave="isHover = false")
    a.link-icon(:href="href" :style="{color: currentColor}" :alt="alt" :aria-label="alt" @focus="isHover = true" @blur="isHover = false")
      slot
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  isHover = false
  @Prop({ required: true }) href!: string
  @Prop({ required: true }) color!: string
  @Prop({ default: '' }) alt!: string

  get currentColor(): string {
    return this.isHover ? this.color : 'currentColor'
  }
}
</script>

<style lang="scss" scoped>
.box {
  color: #aaa;
}

.link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  border: solid 1px #fff;
  border-radius: 50%;
  padding: 1rem;
  transition: all 0.3s;
  cursor: pointer;
  background-color: white;

  &:hover,
  &:active,
  &:focus {
    transform: rotate(-10deg) translate(-2px, -2px) scale(1.1, 1.1);
    border: solid 1px #e1e1e1;
    box-shadow: 4px 4px 4px 3px #a8a8a8;
    outline: none;
  }
}
</style>
