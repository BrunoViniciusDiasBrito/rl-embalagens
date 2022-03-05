<template>
  <div class="product-card">
    <img :src="product.src" alt="" width="150" />
    <div class="product-card__info">
      <h3 class="__title">{{ product.name }}</h3>
      <p class="__specification">{{ product.medida }}</p>
    </div>
    <router-link
      class="btn-contact"
      @click="handleClick"
      :to="{ name: 'Contato' }"
    >
      Cotar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    handleClick() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="less">
@tablet: ~"only screen and (max-width: 993px)";
@mobile: ~"only screen and (max-width: 497px)";

.product-card {
  flex-basis: 24%;
  margin: 15px 0;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 120px;
  }

  .product-card__info {
    min-height: 150px;
    width: 100%;
    box-sizing: border-box;

    .__title {
      border: 1px solid #cecece;
      border-radius: 5px;
      padding: 5px;
    }
  }

  .btn-contact {
    border-radius: 5px;
    text-decoration: none;
    width: 100%;
    background-color: #71b5f0;
    color: white;
    padding: 10px 0;

    &:hover {
      background-color: darken(#71b5f0, 10%);
    }
  }

  @media @tablet {
    flex-basis: 33%;
  }

  @media @mobile {
    flex-basis: 100%;
  }
}
</style>
