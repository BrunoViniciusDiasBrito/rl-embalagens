export const scrollFixPosition = (classe) => {
  window.document.addEventListener("scroll", () => {
    const rolagem = Number.parseInt(window.pageYOffset).toFixed(2);
    const home = window.document.querySelector(`.${classe}`);

    if (rolagem > 50) {
      home.style.marginTop = "116px";
    } else {
      home.style.marginTop = "0";
    }
  });
};
