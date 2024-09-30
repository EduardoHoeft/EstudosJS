const persona = ["eduardo jj", "joao", "felipe jj", "carlos", "jonas jj", "veiga"]

/*
1 forma de fazer esse exemplo.
let arraySemJJ = []

for (let i = 0; i < persona.length; i++) {
    if (!persona[i].includes('jj')) {
        arraySemJJ.push(persona[i])
    }
}

console.log(arraySemJJ)
*/

//2 segunda forma a correta.

const arraySemJJ = persona.filter((persona)=>{
    return ! persona.includes("jj")
})

console.log(arraySemJJ)

/*
const nomesMaiusculos = persona.map((persona)=>{
    return persona.toUpperCase()
})

console.log(nomesMaiusculos)
*/