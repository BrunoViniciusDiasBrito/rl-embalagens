<template>
  <section id="advantages">
    <h1 class="advantages--title">{{ advantageTitle }}</h1>
    <div class="advantages--features">
      <div v-for="card in data" :key="card.title" :class="card.class">
        <MdiSvg width="80" height="80">{{ card.icon }}</MdiSvg>
        <h2>{{ card.title }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { mdiHandshake } from "@mdi/js";
import { mdiAccountGroup } from "@mdi/js";
import { mdiAccountTie } from "@mdi/js";

const data = [
  {
    class: "__quality",
    icon: mdiAccountGroup,
    title: "Qualidade",
  },
  {
    class: "__trustness",
    icon: mdiHandshake,
    title: "Confiança",
  },
  {
    class: "__experience",
    icon: mdiAccountTie,
    title: "Compromisso",
  },
];

const advantageTitle = "Especialistas no Ramo!";
</script>

<style lang="less">
@mobile: ~"only screen and (max-width: 497px)";
@tablet: ~"only screen and (max-width: 993px)";
@tablet2: ~"only screen and (max-width: 827px)";

@font-face {
  font-family: Open;
  src: url("../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf");
}

@trustnessColor: blue;
@experienceColor: orange;
@qualityColor: green;
@titleColor: #cecece;

@keyframes rotateBorder {
  0% {
    transform: rotate3d(0, 1, 0, 0deg);
  }

  100% {
    transform: rotate3d(0, 1, 0, 360deg);
  }
}

#advantages {
  margin: 50px 0px;

  .advantages--title {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 0 8px 8px 8px;
    font-size: 2em;
    font-family: Open;
    border-bottom: 2px solid @titleColor;
    border-radius: 10px;
    color: darken(@titleColor, 40%);
    width: 400px;

    @media @mobile {
      width: auto;
    }
  }

  .advantages--features {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    .__trustness {
      .icon-adjust (@trustnessColor);
      svg {
        color: white;
      }

      h2 {
        background-color: lighten(@trustnessColor, 15%);
        color: white;
        padding: 6px 8px;
        border-radius: 5px;
      }
    }

    .__experience {
      .icon-adjust (@experienceColor);
      svg {
        color: white;
      }

      h2 {
        background-color: lighten(@experienceColor, 15%);
        color: white;
        padding: 6px 8px;
        border-radius: 5px;
      }
    }

    .__quality {
      .icon-adjust (@qualityColor);
      svg {
        color: white;
      }

      h2 {
        background-color: lighten(@qualityColor, 15%);
        color: white;
        padding: 6px 8px;
        border-radius: 5px;
      }
    }
  }
}

.icon-adjust (@color) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: lighten(@color, 15%);

  &:hover {
    border: 2px solid @color;
    animation: rotateBorder;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    background: white;

    svg {
      color: darken(@color, 10%);
    }

    h2 {
      background-color: white;
      color: @color;
      padding: 6px 8px;
      border-radius: 5px;
    }
  }
}
</style>
