<template>
  <footer class="footer-container">
    <div class="footer-ribbon">Entre em contato</div>
    <!-- Social media -->
    <div id="social-media__highlight">
      <p>Nos siga nas Redes sociais!</p>
      <div class="__social">
        <a v-for="ic in icons" :key="ic.name" :href="ic.ref">
          <MdiSvg width="32" height="32">
            {{ ic.icon }}
          </MdiSvg>
        </a>
      </div>
    </div>

    <!-- footer -->
    <div id="footer">
      <div class="__company-resume">
        <h1 class="title">RL Embalagens</h1>
        <p>
          Embalagens para bolo, Doces, Pizza , Lanche, Salgado, Chocolate,
          <br />
          Transporte etc.
          <br />
          Entre em contato com a gente!
        </p>
      </div>

      <div class="__contact-information">
        <h1 class="title">Contato</h1>
        <p class="address">
          <b>Endereço</b>
          : Rua Dr. Eglantina Botaccini Duarte, 87 - JD. Miriam - Campinas
        </p>
        <p class="phone">
          <b>Phone</b>
          : (19) 3257-1736
        </p>
        <p class="email">
          <b>Email</b>
          : contato@rlembalagem.com.br
        </p>
      </div>

      <div class="__product-list">
        <h1 class="title">Destaques</h1>
        <p>produto 1</p>
        <p>produto 2</p>
        <p>produto 3</p>
      </div>
    </div>

    <!-- developed by -->
    <div id="developedBy">
      <p>
        Desenvolvido por
        <a href="https://www.instagram.com/brunobrito.js/">Bruno Brito</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { mdiFacebook, mdiInstagram } from "@mdi/js";

const icons = [
  {
    icon: mdiFacebook,
    name: "facebook",
    ref: "https://www.facebook.com/RL-Embalagem-533815117442911",
  },
  {
    icon: mdiInstagram,
    name: "instagram",
    ref: "https://www.instagram.com/rl.embalagem/",
  },
];
</script>

<style lang="less">
@tablet: ~"only screen and (max-width: 993px)";
@mobile: ~"only screen and (max-width: 497px)";

@titleColor: #8d8d8d;
@socialBg: #333;

.footer-container {
  position: relative;

  .footer-ribbon {
    position: absolute;
    margin: -15px 0 0 120px;
    padding: 10px 20px 6px 20px;
    color: white;
    background: #0088cc;
    font-family: "Shadows Into Light", cursive;

    &::before {
      border-right: 10px solid #646464;
      border-top: 16px solid transparent;
      content: "";
      display: block;
      height: 0;
      left: -17px;
      position: absolute;
      top: 0px;
      width: 7px;
      border-right-color: #005580;
      border-left-color: #005580;
    }
  }

  #social-media__highlight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 120px;
    background-color: @socialBg;
    color: #fafafa;

    p {
      margin-right: 10px;
    }

    .__social {
      svg {
        color: white;
        margin-right: 15px;

        &:hover {
          color: #00aaff;
        }
      }
    }

    p {
      font-size: 1.2em;
    }

    @media @mobile {
      padding: 20px 35px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  #footer {
    box-sizing: border-box;
    background-color: #fafafa;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 100px;

    .__company-resume {
      padding: 15px 20px;
      flex-basis: 30%;

      .title {
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        width: 180px;
        font-size: 1.4em;
        font-weight: 100;
        margin: 0;
        padding: 5px 0;
        color: @titleColor;
      }

      p {
        color: lighten(@titleColor, 5%);

        &:hover {
          color: darken(@titleColor, 5%);
        }
      }

      @media @tablet {
        flex-basis: 50%;
      }
    }

    .__contact-information {
      padding: 15px 20px;
      flex-basis: 40%;

      .title {
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        width: 100px;
        font-size: 1.4em;
        font-weight: 100;
        margin: 0;
        padding: 5px 0;
        color: @titleColor;
      }

      p {
        color: lighten(@titleColor, 5%);

        &:hover {
          color: darken(@titleColor, 5%);
        }
      }

      .address {
        font-size: 0.875em;
        font-weight: 100;
      }

      .phone {
        font-size: 0.875em;
        font-weight: 100;
      }

      .email {
        font-size: 0.875em;
        font-weight: 100;
      }

      @media @tablet {
        flex-basis: 50%;
      }
    }

    .__product-list {
      padding: 15px 20px;
      flex-basis: 30%;

      .title {
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        width: 100px;
        font-size: 1.4em;
        font-weight: 100;
        margin: 0;
        padding: 5px 0;
        color: @titleColor;
      }

      p {
        color: lighten(@titleColor, 5%);

        &:hover {
          color: darken(@titleColor, 5%);
        }
      }

      @media @tablet {
        flex-basis: 50%;
      }
    }

    @media @tablet {
      justify-content: center;
      padding: 15px 50px;
      flex-wrap: wrap;
    }

    @media @mobile {
      padding: 15px 30px;
    }
  }

  #developedBy {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lighten(@socialBg, 45%);

    p {
      color: white;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>
