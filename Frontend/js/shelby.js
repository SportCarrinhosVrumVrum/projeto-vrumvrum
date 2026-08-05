const modal = document.querySelector("#shelbyInfo");
const espec = document.querySelector("#shelbyEspec");
const abrir = document.querySelector("#abrir");
const abrir2 = document.querySelector("#abrir2");
const fechar = document.querySelector("#fechar");
const fechar2 = document.querySelector("#fechar2");

abrir.onclick = () => modal.showModal();

fechar.onclick = () => modal.close();

abrir2.onclick = () => espec.showModal();

fechar2.onclick = () => espec.close();