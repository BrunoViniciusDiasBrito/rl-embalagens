<template>
  <div class="clearfix-navbar">
    <header class="sup-header">
      <span>contato@rlembalagem.com.br</span>
      |
      <span>(19) 3257-1736</span>
    </header>
    <header class="header">
      <div id="logo">
        <img :src="logo" alt="" />
      </div>

      <nav id="nav">
        <router-link @click.prevent="scrollToTop" :to="{ name: 'Inicio' }">
          INICIO
        </router-link>
        <router-link @click.prevent="scrollToTop" :to="{ name: 'Produtos' }">
          PRODUTOS
        </router-link>
        <router-link @click.prevent="scrollToTop" :to="{ name: 'Empresa' }">
          EMPRESA
        </router-link>
        <router-link @click.prevent="scrollToTop" :to="{ name: 'Studio' }">
          STUDIO SÁ
        </router-link>
        <router-link @click.prevent="scrollToTop" :to="{ name: 'Contato' }">
          CONTATO
        </router-link>
      </nav>

      <nav id="nav-mobile">
        <MdiSvg
          @click="handleMenuClick"
          :path="menuIcon"
          width="48"
          height="48"
        ></MdiSvg>
        <div class="__menu" :class="{ showMobileMenu: isHided }">
          <ul>
            <li>
              <router-link
                @click.prevent="scrollToTop"
                :to="{ name: 'Inicio' }"
              >
                INICIO
              </router-link>
            </li>
            <li>
              <router-link
                @click.prevent="scrollToTop"
                :to="{ name: 'Produtos' }"
              >
                PRODUTOS
              </router-link>
            </li>
            <li>
              <router-link
                @click.prevent="scrollToTop"
                :to="{ name: 'Empresa' }"
              >
                EMPRESA
              </router-link>
            </li>
            <li>
              <router-link
                @click.prevent="scrollToTop"
                :to="{ name: 'Studio' }"
              >
                STUDIO SÁ
              </router-link>
            </li>
            <li>
              <router-link
                @click.prevent="scrollToTop"
                :to="{ name: 'Contato' }"
              >
                CONTATO
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import logo from "@/assets/rl-logo.png";
import { mdiMenu } from "@mdi/js";
import { mdiMenuOpen } from "@mdi/js";
import { ref } from "@vue/reactivity";

import { scrollToTop } from "@/mixins/scrollTop.js";

//Control variables
let isOpen = false;
let isHided = ref(null);
let menuIcon = ref(mdiMenu);

//Fixed menu
window.document.addEventListener("scroll", () => {
  const rolagem = Number.parseInt(window.pageYOffset).toFixed(2);
  const navbar = window.document.querySelector(".header");
  const logo = window.document.querySelector("#logo");

  if (rolagem > 50) {
    if (window.innerWidth < 1361 || window.outerWidth < 1361) {
      navbar.classList.add("menuFixed");
    } else {
      navbar.classList.add("menuFixed");
    }
  } else {
    navbar.classList.remove("menuFixed");
    logo.style.width = "100%";
  }
});

// handle functions
const handleMenuClick = () => {
  isOpen = !isOpen;
  if (isOpen) {
    menuIcon.value = mdiMenu;
    isHided.value = null;
  } else {
    menuIcon.value = mdiMenuOpen;
    isHided.value = true;
  }
};

// init menu - to Fix
handleMenuClick();
</script>

<style lang="less">
@headerColor: #fafafa;
@themeColor: #00aaff;
@tablet: ~"only screen and (max-width: 993px)";
@mobile: ~"only screen and (max-width: 497px)";

.clearfix-navbar {
  width: 100%;
  position: relative;

  .sup-header {
    text-align: center;
    padding: 8px 15px;
    font-size: 1em;
    background: darken(@headerColor, 5%);
    color: #1f1d1dc9;
  }

  .header {
    box-sizing: border-box;
    background: @headerColor;
    padding: 8px 100px;
    display: flex;
    z-index: 99999999;

    #nav {
      display: flex;
      align-items: center;
      text-align: center;

      a {
        .activeLink();

        @media @tablet {
          display: none;
        }
      }
    }

    #nav-mobile {
      display: none;

      @media @tablet {
        display: flex;
        width: 50%;
        align-items: center;
        justify-content: flex-end;

        .__menu {
          position: absolute;
          transition: 0.5s ease-in-out;
          z-index: -1;
          bottom: -170px;
          left: 0;
          text-align: center;
          background-color: @headerColor;
          width: 0;
          opacity: 0;
          overflow: hidden;

          ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
              margin: 0 auto;
              display: flex;
              justify-content: center;

              a {
                padding: 8px 10px;
                word-break: keep-all;
                .activeLink();
              }

              &:hover {
                background-color: #00aaff;
              }
            }
          }
        }
      }
    }

    #logo {
      width: 100%;
      height: 100%;
      img {
        width: 100px;
        top: -20px;
        left: 0;

        @media @mobile {
          width: 75px;
        }
      }
    }

    @media @tablet {
      padding: 8px 50px;
    }

    @media @mobile {
      padding: 8px 25px 8px 15px;
    }
  }
}

.activeLink () {
  text-decoration: none;
  font-weight: bold;
  color: #1f1d1d;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  &.router-link-exact-active {
    color: @themeColor;
  }

  &:hover {
    background: @themeColor;
    color: @headerColor;
  }
}

.menuFixed {
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0;
}

.showMobileMenu {
  width: 100% !important;
  z-index: 99 !important;
  opacity: 1 !important;
}
</style>
