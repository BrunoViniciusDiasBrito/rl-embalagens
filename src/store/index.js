import { createStore } from "vuex";

// Produtos - [ temporario ] [ subir firebase ou algum DB]
// 1 - lanche
import lanche_1 from "../assets/produtos/lanche/caixa-pra-1-lanche-14x12x6.png";
import lanche_2 from "../assets/produtos/lanche/caixa-pra-2-lanches-28x12x6.png";
import lanche_3 from "../assets/produtos/lanche/fritas_g.jpg";
import lanche_4 from "../assets/produtos/lanche/fritas_m.jpg";
import lanche_5 from "../assets/produtos/lanche/fritas_p.jpg";

// 2 - Doces e Salgados
import doces_e_salgados_1 from "../assets/produtos/doces_e_salgados/caixa_salgado_20.jpg";
import doces_e_salgados_2 from "../assets/produtos/doces_e_salgados/caixa_trufa_10.jpg";
import doces_e_salgados_3 from "../assets/produtos/doces_e_salgados/caixa_salgado_media.jpg";
import doces_e_salgados_4 from "../assets/produtos/doces_e_salgados/caixa_salgado_grande.jpg";
import doces_e_salgados_5 from "../assets/produtos/doces_e_salgados/caixa_salgado_24.jpg";
import doces_e_salgados_6 from "../assets/produtos/doces_e_salgados/caixa_salgado_onda_20.jpg";
import doces_e_salgados_7 from "../assets/produtos/doces_e_salgados/caixa_salgado onda_25.jpg";
import doces_e_salgados_8 from "../assets/produtos/doces_e_salgados/caixa_salgado onda_25.jpg";
import doces_e_salgados_9 from "../assets/produtos/doces_e_salgados/caixa_salgado_onda_6.jpg";
import doces_e_salgados_10 from "../assets/produtos/doces_e_salgados/caixa_salgado_onda_7.jpg";
import doces_e_salgados_11 from "../assets/produtos/doces_e_salgados/caixa_salgado_onda_38.jpg";
import doces_e_salgados_12 from "../assets/produtos/doces_e_salgados/caixa_doce_onda_38.jpg";
import doces_e_salgados_13 from "../assets/produtos/doces_e_salgados/caixa-lazanha-beringela.png";
import doces_e_salgados_14 from "../assets/produtos/doces_e_salgados/caixa_salgado_onda_7.jpg";
import doces_e_salgados_15 from "../assets/produtos/doces_e_salgados/caixa_salgado_onda_38.jpg";

// 3 - Hotdog
import hotdog_1 from "../assets/produtos/hotdog/caixa-mineirao-lanches.png";
import hotdog_2 from "../assets/rl-logo.png";
import hotdog_3 from "../assets/rl-logo.png";

// 4 - Sacolas
import sacolas from "../assets/rl-logo.png";

// 5 - caixa para pizza
import pizza_1 from "../assets/produtos/caixa-pizza/caixa-pizza-maissabor.png";
import pizza_2 from "../assets/produtos/caixa-pizza/caixa-pizza-harumi.png";
import pizza_3 from "../assets/rl-logo.png";
import pizza_4 from "../assets/rl-logo.png";

// 6 - Diversos
import diversos_1 from "../assets/produtos/diversos/caixa-maleta2.png";
import diversos_2 from "../assets/produtos/diversos/caixa-para-carnes.png";
import diversos_3 from "../assets/produtos/diversos/caixa-cartao-23x29x6.png";
import diversos_4 from "../assets/produtos/diversos/caixa-markare.png";
import diversos_5 from "../assets/produtos/diversos/caixa-cartao-23x29x6.png";
import diversos_6 from "../assets/produtos/diversos/cones-nuggets.png";
import diversos_7 from "../assets/produtos/diversos/reyller-cone.png";
import diversos_8 from "../assets/produtos/diversos/caixa-picole.png";
import diversos_9 from "../assets/rl-logo.png";

// 7 - Bolos e Tortas
import bolos_1 from "../assets/produtos/bolos_tortas/Bolo-oitava.png";
import bolos_2 from "../assets/produtos/bolos_tortas/Bolo-3.png";
import bolos_3 from "../assets/produtos/bolos_tortas/Bolo-quadrado.png";
import bolos_4 from "../assets/produtos/bolos_tortas/Bolo-5.png";
import bolos_5 from "../assets/produtos/bolos_tortas/Bolo-0.png";
import bolos_6 from "../assets/produtos/bolos_tortas/Bolo-3.png";
import bolos_7 from "../assets/produtos/bolos_tortas/Bolo-6.png";
import bolos_8 from "../assets/produtos/bolos_tortas/Bolo-4.png";

// 7 - transporte
import transporte_8 from "../assets/produtos/transporte/caixa-correio-13.jpg";
import transporte_9 from "../assets/produtos/transporte/caixa-correio-15.jpg";
import transporte_10 from "../assets/produtos/transporte/caixa-correio-21.jpg";

export default createStore({
  state: {
    produtos: [
      {
        Lanches: [
          {
            name: "Lanche",
            medida: "Caixa para 1 Hanburguer papel cartão 14x12x16",
            src: lanche_1,
          },
          {
            name: "Lanche 2",
            medida: "Caixa para 2 Hanburgueres papel cartão 12x28x6",
            src: lanche_2,
          },
          {
            name: "Caixa Fritas Pequena",
            medida: "Papel cartão 11x7x3",
            src: lanche_3,
          },
          {
            name: "Caixa Fritas Média",
            medida: "Papel cartão 11x14x5",
            src: lanche_4,
          },
          {
            name: "Caixa Fritas Grande",
            medida: "Papel cartão 12x18x15",
            src: lanche_5,
          },
        ],
        DocesESalgados: [
          {
            name: "Caixa Salgado 1",
            medida: "Papel cartão 20x20x6",
            src: doces_e_salgados_1,
          },
          {
            name: "Caixa para Trufa",
            medida: "Papel cartão 10X25X5",
            src: doces_e_salgados_2,
          },
          {
            name: "Caixa para salgado média",
            medida: "Papel cartão 23x29x6",
            src: doces_e_salgados_3,
          },
          {
            name: "Caixa para salgado grande",
            medida: "Papel cartão 25x37x6",
            src: doces_e_salgados_4,
          },
          {
            name: "Caixa Salgado 2",
            medida: "Papel onda B com tampa papel cartão 24x37x6",
            src: doces_e_salgados_5,
          },
          {
            name: "Caixa Salgado 3",
            medida: "Papel onda B 20x20x6",
            src: doces_e_salgados_6,
          },
          {
            name: "Caixa Salgado 4",
            medida: "Papel onda B 25x35x6",
            src: doces_e_salgados_7,
          },
          {
            name: "Caixa Salgado 5",
            medida: "Papel com onda B 30x30x6",
            src: doces_e_salgados_8,
          },
          {
            name: "Caixa para Salgado 6",
            medida: "Papel com onda B 38x38x6",
            src: doces_e_salgados_9,
          },
          {
            name: "Caixa para Salgado 7",
            medida: "Papel com onda B 25x37x6",
            src: doces_e_salgados_10,
          },
          {
            name: "Caixa para Salgado 8",
            medida: "Papel com onda B 38x38x6",
            src: doces_e_salgados_11,
          },
          {
            name: "Caixa para doce",
            medida: "Papel com onda B 38x38x6 com berço pra 50 unidades",
            src: doces_e_salgados_12,
          },
          {
            name: "Cx. Lazanha",
            medida: "24X20X5",
            src: doces_e_salgados_13,
          },
          {
            name: "Caixa para salgado 9",
            medida: "Papel com onda B 23x32x7",
            src: doces_e_salgados_14,
          },
          {
            name: "Caixa para salgado 10",
            medida: "Papel com onda B 25x37x6",
            src: doces_e_salgados_15,
          },
        ],
        HotDog: [
          {
            name: "Genão Peq. / Genão Gr.",
            medida: "8X16X8 / 9X20X5",
            src: hotdog_1,
          },
          {
            name: "Fundo Automático",
            medida: "8X20X7",
            src: hotdog_2,
          },
          {
            name: "Encaixe Peq. / Encaixe Gr.",
            medida: "7X20X7 / 72X0X7",
            src: hotdog_3,
          },
        ],
        Sacolas: [
          {
            name: "Semi Joia",
            medida: "4X6X7",
            src: sacolas,
          },
          {
            name: "Bijuteria",
            medida: "4X14X16",
            src: sacolas,
          },
          {
            name: "Alça de Cordão",
            medida: "36X28XX6 / 35X35X13",
            src: sacolas,
          },
          {
            name: "Sacola 1",
            medida: "25X25X7",
            src: sacolas,
          },
          {
            name: "C&A Peq. / C&A Gr.",
            medida: "24X28X6 / 27X30X7",
            src: sacolas,
          },
          {
            name: "Costela",
            medida: "17X21X20",
            src: sacolas,
          },
          {
            name: "Vinho",
            medida: "9X8X22",
            src: sacolas,
          },
          {
            name: "Frango",
            medida: "14X16X11",
            src: sacolas,
          },
          {
            name: "Lanche",
            medida: "9X18X12",
            src: sacolas,
          },
          {
            name: "Sacola 2",
            medida: "37X36X6 / 16X14X9 / 57X13X9",
            src: sacolas,
          },
        ],
        Diversos: [
          {
            name: "Caixa Maleta",
            medida: "",
            src: diversos_1,
          },
          {
            name: "Caixa para Carnes",
            medida: "",
            src: diversos_2,
          },
          {
            name: "Caixa Médio Cartão",
            medida: "23x29x6",
            src: diversos_3,
          },
          {
            name: "Markare",
            medida: "11X5X11",
            src: diversos_4,
          },
          {
            name: "Caixa Grande Cartão",
            medida: "25x37x6",
            src: diversos_5,
          },
          {
            name: "Cx. Cone",
            medida: "10x15",
            src: diversos_6,
          },
          {
            name: "Caixa 50 picolés / Caixa 25 picolés",
            medida: "23X16X21 / 15X17X10",
            src: diversos_7,
          },
          {
            name: "Caixa para lanche",
            medida: "19X15X7",
            src: diversos_8,
          },
          {
            name: "Caixa para Kit Churrasco",
            medida: "15X35X10",
            src: diversos_9,
          },
          {
            name: "Cx. Quadrada",
            medida: "23X18X5",
            src: diversos_9,
          },
          {
            name: "Marmitex Sacola",
            medida: "33X22X10",
            src: diversos_9,
          },
          {
            name: "Mark. Peq./ Mark Média",
            medida: "3X4X6 / 5X9X7",
            src: diversos_9,
          },
          {
            name: "Brinco",
            medida: "7X7X5",
            src: diversos_9,
          },
          {
            name: "Porta copo",
            medida: "46X17",
            src: diversos_9,
          },
          {
            name: "Past. Arq. Peq. / Past. Arq. Gr.",
            medida: "20X30X2 / 22X32X2",
            src: diversos_9,
          },
          {
            name: "Caixa para pão de metro",
            medida: "Min. de 60cm / Máx. de 1,00m",
            src: diversos_9,
          },
          {
            name: "Caixa 1",
            medida:
              "11X16X2 / 7X4X19 / 25X10X3 / 9X9,5X17,5 / 6X6,5X14 / 6X6X8,5 / 7X3,5X7 / 7X7X3",
            src: diversos_9,
          },
          {
            name: "Caixa 2",
            medida: "7x9X3 / 22X25X5 / 6X11X16 / 13X22X7 / 29X21X5",
            src: diversos_9,
          },
        ],
        CaixaPizza: [
          {
            name: "Oitavada",
            medida: "25X25X4 / 30X30X4 / 35X35X4 / 40X40X4 / 50X50X5",
            src: pizza_1,
          },
          {
            name: "Quadrada",
            medida: "35X35X4",
            src: pizza_2,
          },
          {
            name: "Calzone Peq. / Calzone Gr.",
            medida: "31X17,5X6 / 37X20X6,5",
            src: pizza_3,
          },
          {
            name: "Disco",
            medida:
              "Diam. 13,5cm / Diam. 21cm / Diam. 30cm / Diam. 35cm / Diam. 40cm",
            src: pizza_4,
          },
        ],
        BolosETortas: [
          {
            name: "Caixa para bolo oitavada",
            medida: "Papel onda B 35x12",
            src: bolos_1,
          },
          {
            name: "Caixa para bolo Quadrada",
            medida: "Papel com onda B 29x29x10 ou 12 de alt.",
            src: bolos_2,
          },
          {
            name: "Caixa de papel para bolo quadrada",
            medida:
              "Papel com onda B35x35x12 c/ berço para cupcake grande 8 unidades ou pequeno 18 unidades, acompanha 2 berços por caixa.",
            src: bolos_3,
          },
          {
            name: "Caixa para bolo 5",
            medida: "Papel com onda B 35x43x12",
            src: bolos_4,
          },
          {
            name: "Caixa para bolo 0",
            medida: "Papel onda B 28x31x12 ou 25 alt.",
            src: bolos_5,
          },
          {
            name: "Caixa para bolo 3",
            medida: "Papel com onda B 29x40x12",
            src: bolos_6,
          },
          {
            name: "Caixa para bolo 6",
            medida: "Pape com onda B 39x49x12",
            src: bolos_7,
          },
          {
            name: "Caixa para bolo 4",
            medida: "Papelcom onda B 29x35x8",
            src: bolos_8,
          },
          {
            name: "Caixa para bolo 7",
            medida: "Papel com onda B 45X53X12",
            src: bolos_6,
          },
          {
            name: "Caixa para bolo 14",
            medida: "Papel com onda B 55x79x12",
            src: bolos_6,
          },
          {
            name: "Caixa para bolo 12",
            medida: "Papel com onda B 49x64x12",
            src: bolos_6,
          },
        ],
        CaixaTransporte: [
          {
            name: "Caixa Correio 1",
            medida: "Papel onda B 13x22x7",
            src: transporte_8,
          },
          {
            name: "Caixa Correio 2",
            medida: "Papel onda B 15x15x4,5",
            src: transporte_9,
          },
          {
            name: "Caixa Correio 3",
            medida: "Papel onda B 21x29x5",
            src: transporte_10,
          },
          {
            name: "Caixa Correio 4",
            medida: "Papel onda B 11x16x6",
            src: transporte_8,
          },
        ],
      },
    ],
  },
  mutations: {},
  getters: {
    getProducts(state) {
      return state.produtos;
    },
  },
  actions: {},
  modules: {},
});
