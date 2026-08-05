const modal = document.querySelector("#fordInfo");
const espec = document.querySelector("#fordEspec");
const abrir = document.querySelector("#abrir");
const abrir2 = document.querySelector("#abrir2");
const abrir3 = document.querySelector("#abrir3")
const fechar = document.querySelector("#fechar");
const fechar2 = document.querySelector("#fechar2");
const fechar3 = document.querySelector("#fechar3")


abrir.onclick = () => modal.showModal();

fechar.onclick = () => modal.close();

abrir2.onclick = () => espec.showModal();

fechar2.onclick = () => espec.close();

abrir3.onclick = () => fordConquistas.showModal();

fechar3.onclick = () => fordConquistas.close();