<template>
  <div class="nav-product__container">
    <ul class="__navbar">
      <router-link
        v-for="category in categories"
        :key="category.name"
        :to="{
          name: 'Produto',
          params: { tag: `${category.slug}` },
        }"
        @click="handleClick"
      >
        <img :src="category.img" :alt="category.name" width="100" height="80" />
        <li>
          {{ category.name }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["categories"],
  methods: {
    handleClick() {
      window.scrollTo({
        top: 130,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="less">
@tablet: ~"only screen and (max-width: 993px)";
@tablet2: ~"only screen and (max-width: 867px)";

.nav-product__container {
  .__navbar {
    margin-top: 30px;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    a {
      // width: 300px;
      flex-basis: 30%;
      text-decoration: none;
      margin-right: 15px;
      margin-bottom: 15px;
      text-align: center;
      display: flex;
      background-color: aliceblue;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      align-items: center;
      color: #222;

      &:hover {
        background-color: rgb(113, 181, 240);
        color: white;
      }

      &.router-link-exact-active {
        background-color: rgb(113, 181, 240);
        color: white;
      }

      li {
        padding: 10px 14px;
        margin: 0 auto;
        font-size: 1.2em;
      }

      @media @tablet {
        flex-basis: 48%;
      }

      @media @tablet2 {
        flex-basis: 100%;
      }
    }
  }
}
</style>
