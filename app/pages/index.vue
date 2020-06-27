<template lang="pug">
section.container
  div.title
    div#title-wrapper.wrapper
      div.primary TY
      div.secondary
        div.first Engineering
        div.second Laboratory
  section.menu
    div.grid-container
      top-menu-button(bg-color="#2994FF")
      top-menu-button(bg-color="#E23C41")
      top-menu-button(bg-color="#111111")
      top-menu-button(bg-color="#6DBFBC")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/css/_variable.scss';

.container {
  max-width: 1028px;
  margin: 0 auto;
}

.title {
  height: clamp(40rem, 100vh, 100rem);
  color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    font-family: 'Oswald', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;

    .primary {
      font-size: 30rem;
      margin-right: 50px;
    }

    .secondary {
      font-size: 12rem;
      text-align: left;
      display: flex;
      flex-direction: column;

      .first {
        margin: 18px 0 8px;
      }
    }
  }
}

.no-webp .wrapper {
  background-image: url(~assets/images/top_background_landscape.jpg);
}

.webp .wrapper {
  background-image: url(~assets/images/top_background_landscape.webp);
}

@media #{$width-tablet} {
  .title {
    .wrapper {
      flex-direction: column;

      .primary {
        font-size: 30rem;
        margin-right: 0;
      }

      .secondary {
        text-align: center;
        font-size: 12rem;
      }
    }
  }

  .no-webp .wrapper {
    background-image: url(~assets/images/top_background_portrait.jpg);
  }

  .webp .wrapper {
    background-image: url(~assets/images/top_background_portrait.webp);
  }
}

@media #{$width-mobile} {
  .title {
    .wrapper {
      flex-direction: column;

      .primary {
        font-size: 20rem;
      }

      .secondary {
        font-size: 8rem;
      }
    }
  }
}

.menu {
  width: 700px;
  height: 500px;
  margin: 0 auto;

  .grid-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 30px;
    grid-template-areas: '. .' '. .';
  }
}

@media #{$width-mobile} {
  .menu {
    width: 300px;
    height: 1000px;

    .grid-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-areas: '.' '.' '.' '.';
    }
  }
}
</style>
