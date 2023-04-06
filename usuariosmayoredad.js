let edadesUsuarios = [18, 22, 30, 15, 45, 17, 55, 9, 7, 12];

function recorrerListado(lista) {
    for(let i = 0; i < lista.length; i++) {
        if(lista[i] >= 18) {
            console.log(lista[i])
        }
    }
}
let lista = edadesUsuarios
recorrerListado(lista)