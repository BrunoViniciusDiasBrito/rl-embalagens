<template>
  <div class="about-us">
    <video autoplay muted poster loop>
      <source :src="promoVideo" type="video/mp4" />
    </video>
    <div class="about-us__information">
      <h1 class="about-us__title">Sobre Nós</h1>
      <div class="about-us__body">
        Depois de 15 anos trabalhando com máquinas para fabricar papel Luiz
        Carlos, depois de ser dispensado da sua profissão resolveu abrir a uma
        fábrica de embalagens. A RL Embalagens está a 10 anos no mercado. Em
        2007 conseguimos adquirir sede e veículo próprio em Campinas para melhor
        atender nossos clientes. Trabalhamos com caixas para bolos, doces,
        salgados, chocolates, pizzas, transportes, correios, etc. Atendemos em
        quantidade pequenas. Desenvolvemos embalagens e artes gráficas junto com
        profissionais qualificados. Maquinário próprio. Trabalhamos com silk
        screen e off set. Atendemos Campinas e região. Trabalhamos com chapas de
        papel reciclado, com certificado de qualidade, visando colaborar com
        meio ambiente. Chapas de papel ondulado branco e pardo, pardo e pardo,
        papel cartão. Trabalhamos com várias gramaturas.
      </div>
    </div>
  </div>
</template>

<script setup>
import promoVideo from "@/assets/video/_assembly-machine.mp4";
</script>

<style lang="less">
@aboutUsContainer: 60px;
@textColor: #3f3f3f;
@mobile: ~"only screen and (max-width: 497px)";
@tablet: ~"only screen and (max-width: 993px)";
@tablet2: ~"only screen and (max-width: 827px)";

@font-face {
  font-family: Open;
  src: url("../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf");
}

.about-us {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  video {
    width: 100%;
    height: 100%;
    filter: blur(1px) opacity(25%);

    @media @tablet2 {
      display: none;
    }
  }

  .about-us__information {
    max-width: calc(1200px - @aboutUsContainer);
    background: rgba(255, 255, 255, 0.87);
    padding: 30px @aboutUsContainer;
    position: absolute;
    z-index: 98;
    border-radius: 10px;

    .about-us__title {
      width: 100%;
      text-align: center;
      color: darken(@textColor, 15%);
      font-family: Open;
    }
    .about-us__body {
      color: @textColor;
      font-size: 1.2em;
      line-height: 30px;
    }

    @media @tablet {
      z-index: 0;
      padding: 30px 40px;
    }
    @media @tablet2 {
      z-index: 0;
      position: inherit;
    }
  }
}
</style>
