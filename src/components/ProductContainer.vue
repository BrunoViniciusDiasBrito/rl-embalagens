<template>
  <div class="produtos-container">
    <h1>{{ title }}</h1>
    <NavProduct :categories="categories" />
    <router-view>
      <ProductList v-if="$route.params.tag" :productTag="$route.params.tag" />
    </router-view>
  </div>
</template>

<script setup>
import { scrollFixPosition } from "@/mixins/scrollFixPosition.js";
import { createApp } from "@vue/runtime-dom";
import ProductList from "@/components/ProductList.vue";
import NavProduct from "@/components/NavProduct.vue";

import lanches from "@/assets/categories/lanches-thumb.png";
import doces from "@/assets/categories/doces-salgados-thumb.jpg";
import hotdog from "@/assets/categories/hotdog-thumb.png";
import sacolas from "@/assets/categories/joias-thumb.png";
import diversos from "@/assets/categories/diversos-thumb.png";
import pizza from "@/assets/categories/pizza-thumb.png";
import bolos from "@/assets/categories/bolos-thumb.png";
import transporte from "@/assets/categories/transporte-thumb.jpg";

// Scroll
scrollFixPosition("produtos-container");

const title = "Produtos";

// Categories
const categories = [
  {
    name: "Lanches",
    slug: "Lanches",
    hash: "lanches",
    img: lanches,
  },
  {
    name: "Doces E Salgados",
    slug: "DocesESalgados",
    hash: "docesESalgados",
    img: doces,
  },
  {
    name: "HotDog",
    slug: "HotDog",
    hash: "hotDog",
    img: hotdog,
  },
  {
    name: "Sacolas",
    slug: "Sacolas",
    hash: "sacolas",
    img: sacolas,
  },
  {
    name: "Diversos",
    slug: "Diversos",
    hash: "diversos",
    img: diversos,
  },
  {
    name: "Caixa de Pizza",
    slug: "CaixaPizza",
    hash: "caixaPizza",
    img: pizza,
  },
  {
    name: "Bolos e Tortas",
    slug: "BolosETortas",
    hash: "bolosETortas",
    img: bolos,
  },
  {
    name: "Caixa de Transporte",
    slug: "CaixaTransporte",
    hash: "caixaTransporte",
    img: transporte,
  },
];

// using component
const app = createApp({});
app.component("Product", ProductList);
app.component("NavProduct", NavProduct);
</script>

<style lang="less">
@productPadding: 60px;
@tablet: ~"only screen and (max-width: 993px)";
@mobile: ~"only screen and (max-width: 497px)";

.produtos-container {
  max-width: calc(1200px - @productPadding);
  padding: 30px 60px;

  @media @mobile {
    padding: 30px 20px;
  }
}
</style>
