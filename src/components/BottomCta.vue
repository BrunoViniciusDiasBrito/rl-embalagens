<template>
  <div class="bottom-cta">
    <div class="cta-left">
      <p>
        <span class="service">Embalagens</span>
        para
        <i>Bolo, Doces, Pizza , Lanche, Salgado, Chocolate,</i>
        <span class="service">Transporte</span>
        etc!
      </p>
    </div>

    <div class="cta-right">
      <router-link class="btn-contact" :to="{ name: 'Contato' }">
        Compre!
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@btnCta: #ffc04d;
@btn-cotact-color: #0292da;
@mobile: ~"only screen and (max-width: 497px)";

.service {
  font-weight: bold;
  font-size: 1.2em;
}

.bottom-cta {
  font-size: 1.4em;
  padding: 60px 80px;
  text-align: center;
  position: relative;
  background-color: whitesmoke;
  display: flex;

  align-items: center;
  flex-wrap: wrap;

  &::before {
    content: "";
    display: block;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid rgb(255, 255, 255);
    height: 20px;
    width: auto;
    top: 0px;
    left: 50%;
    margin-left: -20px;
  }

  .cta-left {
    flex-grow: 1;
  }

  .cta-right {
    flex-grow: 3;

    .btn-contact {
      outline: none;
      color: white;
      font-size: 1em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
      padding: 12px 14px;
      background: @btn-cotact-color;
      border-radius: 5px;
      box-shadow: 2px 1px 3px rgba(255, 255, 255, 0.158);
      transition: 0.5s all;

      &:hover {
        background-color: darken(@btn-cotact-color, 10%);
      }
    }
  }

  @media @mobile {
    padding: 60px 20px;
  }
}
</style>
