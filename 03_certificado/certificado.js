function solucao(presenca, entregouTodosOsTrabalhos, notaSoftSkills, notaProgramacao) {
    
    let resultado;
    // APROVADA => presenca minima de 75% E ter entregue todos os trabalhos;
    // REPROVADA => NÃO foi APROVADA;
    // APROVADA - MERITO EM SOFT SKILLS => nota de pelo menos 90 na matéria de Soft Skills;
    // APROVADA - MERITO EM PROGRAMACAO => nota de pelo menos 90 na matéria de programação;
    // APROVADA - NOTA 1000 => nota de pelo menos 90 em ambas as matérias.

    if (presenca < 75 || entregouTodosOsTrabalhos === false) {
        resultado = 'REPROVADA';
        console.log(resultado);
    } else {
        if (notaSoftSkills >= 90 && notaProgramacao >= 90) {
            resultado = 'APROVADA - NOTA 1000';
            console.log(resultado);
        } else if (notaSoftSkills >= 90) {
            resultado = 'APROVADA - MERITO EM SOFT SKILLS';
            console.log(resultado);
        } else if (notaProgramacao >= 90) {
            resultado = 'APROVADA - MERITO EM PROGRAMACAO';
            console.log(resultado);
        } else {
            resultado = 'APROVADA';
            console.log(resultado);
        }
    }
}

console.log(solucao(75, true, 80, 80));