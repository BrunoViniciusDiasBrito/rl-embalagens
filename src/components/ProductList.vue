<template>
  <div class="product-list">
    <NewProduct
      v-for="product in filteredProduct[0]"
      :key="product.name"
      :product="product"
    />
  </div>
</template>

<script>
import NewProduct from "@/components/NewProduct.vue";
export default {
  props: ["productTag"],
  components: { NewProduct },
  computed: {
    filteredProduct() {
      let products = this.$store.getters.getProducts;
      let newProducts = [];

      newProducts = products.map((el) => {
        let [...p] = el[`${this.productTag}`];

        return p;
      });

      return newProducts;
    },
  },
};
</script>

<style lang="less">
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  margin-top: 25px;
  padding-top: 25px;
  position: relative;

  &::before {
    content: "Produtos";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 1.4em;
    font-weight: bold;
    width: 120px;
    height: 40px;
    background-color: #71b5f0;
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.479);
    color: white;
    top: 0;
    transform: rotate(-15deg);
  }
}
</style>
