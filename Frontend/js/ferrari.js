const modal = document.querySelector("#ferrariInfo");
const espec = document.querySelector("#ferrariEspec");
const abrir = document.querySelector("#abrir");
const abrir2 = document.querySelector("#abrir2");
const fechar = document.querySelector("#fechar");
const fechar2 = document.querySelector("#fechar2");

abrir.onclick = () => modal.showModal();

fechar.onclick = () => modal.close();

abrir2.onclick = () => espec.showModal();

fechar2.onclick = () => espec.close();