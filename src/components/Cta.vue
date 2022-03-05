<template>
  <div class="cta-container">
    <div class="__call">
      Desenvolvemos sua embalagem sob medida
      <span class="__brand">RL Embalagens</span>
    </div>

    <div class="__btn-action">
      <router-link class="btn-contact" :to="{ name: 'Contato' }">
        Entre em Contato
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@bgCta: #171717;
@logoColor: #00aaff;
@btn-cotact-color: #42b983;
@themeColor: #0292da;

@tablet: ~"only screen and (max-width: 993px)";
@mobile: ~"only screen and (max-width: 497px)";

@keyframes enterSlash {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cta-container {
  min-height: 100px;
  padding: 8px 0px;
  background-color: @bgCta;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  .__call {
    color: #fff;
    font-size: 1.5em;
    font-weight: 300;

    .__brand {
      color: @logoColor;
      font-size: 1.6em;

      &::before {
        content: "- ";
        animation-name: enterSlash;
        animation-duration: 3s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
      }

      &::after {
        content: " -";
        animation-name: enterSlash;
        animation-duration: 3s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
      }

      @media @tablet {
        font-size: 1.2em;
        line-break: normal;
      }
    }

    @media @tablet {
      text-align: center;
      padding: 10px 20px;
      margin-bottom: 20px;
    }
  }

  .__btn-action {
    .btn-contact {
      color: #fff;
      font-size: 1.6em;
      text-decoration: none;
      padding: 12px 14px;
      outline: none;
      background: @themeColor;
      border-radius: 5px;
      box-shadow: 2px 1px 3px rgba(255, 255, 255, 0.158);
      transition: 0.5s all;

      &:hover {
        background: darken(@themeColor, 10%);
      }
    }

    @media @tablet {
      margin-bottom: 20px;
    }
  }

  @media @tablet {
    justify-content: center;
  }
}
</style>
