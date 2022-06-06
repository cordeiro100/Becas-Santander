const carro = {
  id: 42,
  marca: "toyota",
  modelo: "corolla",
  cor: "prata",
};

function carroMarca({ marca }) {
  console.log(marca);
  return marca;
}
