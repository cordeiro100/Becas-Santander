function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }

  return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Lucas", "Admin");
usuarios.set("Jorge", "User");
usuarios.set("Natália", "Admin");

console.log(getAdmins(usuarios));

const meusNumeros = [30, 20, 15, 17, 40, 50, 87, 83, 65];
function valoresUnicos(arr) {
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(meusNumeros);
