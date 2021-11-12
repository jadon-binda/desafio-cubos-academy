function solucao(diaDoCiclo) {
	// Fases do Ciclo Menstrual, durando em média 28 dias
    // MENSTRUACAO -> 1 ao 5
    // FASE FOLICULAR => 6 ao 11
    // OVULACAO -> 12 ao 16
    // FASE LUTEA -> 17 ao 28

    if (diaDoCiclo >= 1 & diaDoCiclo <= 5) {
        console.log('MENSTRUACAO');
    } else if (diaDoCiclo >= 6 & diaDoCiclo <= 11) {
        console.log('FASE FOLICULAR');
    } else if (diaDoCiclo >= 12 & diaDoCiclo <= 16) {
        console.log('OVULACAO');
    } else if (diaDoCiclo >= 17 & diaDoCiclo <= 28) {
        console.log('FASE LUTEA');
    } else {
        console.log('VALOR INCORRETO! DIGITE OUTRO VALOR ENTRE 1 E 28 POR FAVOR.');
    }
}

console.log(solucao(18));