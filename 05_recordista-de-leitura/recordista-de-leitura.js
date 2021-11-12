function solucao(diasDeLeitura) {
    
    let diasSeguidosDeLeitura = [];
    let cont = 0;
    let medalha = false;
    let diasRecorde = 0;

    for (let i = 0; i < diasDeLeitura.length; i++) {
        if (diasDeLeitura[i]) {
            cont ++;
        } else {
                diasSeguidosDeLeitura.push(cont);
                cont = 0;
            } 
    }
    diasSeguidosDeLeitura.push(cont);

    console.log(diasSeguidosDeLeitura);

    for (let i = 0; i < diasSeguidosDeLeitura.length; i++) {
       if (diasSeguidosDeLeitura[i] >= 7) {
            medalha = true;
            if (diasSeguidosDeLeitura[i] > diasRecorde) {
            diasRecorde = diasSeguidosDeLeitura[i]; 
            }
        }
    }

    if (medalha) {
        console.log(diasRecorde);
        } else {
        console.log('SEM MEDALHA');
        }
}

// TESTES

//Sample Input 0
let diasDeLeitura0 =
[
    false,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    false
];
console.log(solucao(diasDeLeitura0));

//Sample Input 1
let diasDeLeitura1 =
[
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false
];
console.log(solucao(diasDeLeitura1));

//Sample Input 2
let diasDeLeitura2 =
[
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true
];
console.log(solucao(diasDeLeitura2));