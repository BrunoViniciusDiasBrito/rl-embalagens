<template>
  <div class="banner-container">
    <div class="banner">
      <div class="__overlay"></div>
      <div class="__heading-title">Embalagens</div>
      <div class="__heading_body">Displyer</div>
      <span class="left-arrow">
        <MdiSvg>{{ mdiChevronLeft }}</MdiSvg>
      </span>
      <span class="right-arrow">
        <MdiSvg>{{ mdiChevronRight }}</MdiSvg>
      </span>
    </div>
    <Cta />
  </div>
</template>

<script setup>
//Icons
import { mdiChevronLeft } from "@mdi/js";
import { mdiChevronRight } from "@mdi/js";
import { onMounted } from "@vue/runtime-core";

//Components
import Cta from "@/components/Cta.vue";

//Mixins
import { scrollFixPosition } from "@/mixins/scrollFixPosition.js";

// banner adjust based on navbar scroll
scrollFixPosition("home");

//Arrow hide/show
onMounted(() => {
  const banner = window.document.querySelector(".banner");
  const leftArrow = window.document.querySelector(".left-arrow");
  const rightArrow = window.document.querySelector(".right-arrow");

  banner.addEventListener("mouseover", () => {
    leftArrow.classList.add("show");
    rightArrow.classList.add("show");
  });

  banner.addEventListener("mouseleave", () => {
    leftArrow.classList.remove("show");
    rightArrow.classList.remove("show");
  });
});
</script>

<style lang="less">
//Mixin
.arrow-style(@arrowPosition) {
  margin: @arrowPosition;
  background-color: rgba(0, 0, 0, 0.651);
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 5px 8px;
  opacity: 0;
  transition: 0.5s ease-in;
}

// main content style
.banner-container {
  width: 100%;
  .banner {
    position: relative;
    background-image: url("../assets/banners/embalagens-pizza.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 450px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(38, 77, 184, 0.13);
      filter: contrast(200%);
    }

    .__heading-title {
      position: relative;
    }

    .__heading-body {
      position: relative;
    }

    .left-arrow {
      position: absolute;
      left: 0;
      .arrow-style(0px 0px 0px 20px);
    }
    .right-arrow {
      position: absolute;
      right: 0;
      .arrow-style(0px 20px 0px 0px);
    }
  }
}

.show {
  opacity: 1 !important;
}
</style>
