function solucao(idadesDosAtletas) {
    
    let cont = 0;
    
    for (i = 0; i < idadesDosAtletas.length; i++) {
        if (idadesDosAtletas[i] > 23) {
                cont += 1;
        } 
    }

    if (idadesDosAtletas.length > 18) {
        console.log('INVALIDA POR TER MAIS DE 18 JOGADORES');
        } else if (cont > 3) {
            console.log(cont);
            } else {
                console.log('CONVOCACAO VALIDA');
    }
}


// TESTES

// Sample Input 0
let idadesDosTimes0 = [
    20,
    24,
    21,
    20,
    20,
    17,
    21,
    20,
    22,
    21,
    17,
    17,
    20,
    24,
    17,
    22,
    23,
    24
];
console.log(solucao(idadesDosTimes0));

// Sample Input 1
let idadesDosTimes1 = [
    21,
    23,
    23,
    25,
    18,
    19,
    24,
    18,
    21,
    25,
    21,
    24,
    17,
    22,
    23,
    21,
    17,
    23,
    22,
];
console.log(solucao(idadesDosTimes1));

// Sample Input 2
let idadesDosTimes2 = [
    19,
    25,
    25,
    18,
    18,
    24,
    23,
    18,
    19,
    21,
    20,
    25,
    25,
    19,
    22,
    21,
    23
];
console.log(solucao(idadesDosTimes2));