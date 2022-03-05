<template>
  <div class="not-found">Página não encontrada :(</div>
</template>

<script setup>
//Mixins
import { scrollFixPosition } from "@/mixins/scrollFixPosition.js";
scrollFixPosition("not-found");
</script>

<style>
.not-found {
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2em;
}
</style>
