let nome = "Lucas"
let sobrenome = "Cordeiro"


nome.concat(sobrenome)
console.log(nome.concat(sobrenome))

let concatenado = nome.concat(sobrenome)
console.log(concatenado)

console.log(concatenado.length)


console.log(nome [0])


//Formas de concatenar

concatenado = nome + " " + sobrenome
console.log(concatenado)


//Pulando linhas

concatenado = nome + "\n" + sobrenome
console.log(concatenado)


concatenado = `${nome} ${sobrenome}`
console.log(concatenado)

//Pulando linha 

concatenado = `${nome} 
${sobrenome}`
console.log(concatenado)

concatenado = "\""
console.log(concatenado)

// Separando todas as letras


let frase = "Olá, seja bem vindo"

frase.split('')
console.log(frase.split(""))

console.log(frase.split(" "))

// Procurando se a frase possui a palavra desejada

frase.includes("Olá")
console.log(frase.includes("Olá"))


//Utilizando replace

frase.replace("Olá", "Oi")
console.log(frase.replace("Olá", "Oi"))

console.log(frase)

fraseModificada = frase.replace("Olá", "Oi")
console.log(fraseModificada)
