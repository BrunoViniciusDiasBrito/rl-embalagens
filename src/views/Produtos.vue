<template>
  <div class="produtos">
    <ProductContainer />
  </div>
</template>

<script>
import ProductContainer from "@/components/ProductContainer.vue";
export default {
  components: { ProductContainer },
};
</script>

<style>
.produtos {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
