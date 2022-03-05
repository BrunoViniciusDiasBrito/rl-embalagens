<template>
  <div class="home">
    <Banner />
    <SobreNos />
    <Vantagens />
    <BottomCta />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import SobreNos from "@/components/SobreNos.vue";
import Vantagens from "@/components/Vantagens.vue";
import BottomCta from "@/components/BottomCta.vue";

export default {
  name: "Home",
  components: { Banner, SobreNos, Vantagens, BottomCta },
};
</script>
<style lang="less">
.home {
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
