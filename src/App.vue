<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Navbar, Footer },
};
</script>
<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 100%;
  position: relative;
  box-sizing: border-box;
}
</style>
