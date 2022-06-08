// function getAdmins(map) {
//   let admins = [];
//   for ([key, value] of map) {
//     if (value === "Admin") {
//       admins.push(key);
//     }
//   }

//   return admins;
// }

// const usuarios = new Map();

// usuarios.set("Luiz", "Admin");
// usuarios.set("Lucas", "Admin");
// usuarios.set("Jorge", "User");
// usuarios.set("Natália", "Admin");


// console.log(getAdmins(usuarios))




// function getAdmins(map){
//     let admins = []

//     for([key, values] of map){
//         if(values === 'Admin') {
//             admins.push(key)
//         }
//     }
//     return admins
// }

// const usuarios = new Map()

// usuarios.set('Lucas','Admin')
// usuarios.set('Yure','Admin')
// usuarios.set('Felipe','User')

// console.log(getAdmins(usuarios))

function getAdmins(map){
    let admins = []
    for([key, values] of map){
        if(values === 'Admin'){
            admins.push(key)
        }
    }
return admins
}

const usuarios = new Map()
usuarios.set('Lucas', 'Admin')
usuarios.set('Carlos', 'Admin')
usuarios.set('Felipe', 'Admin')

console.log(getAdmins(usuarios))