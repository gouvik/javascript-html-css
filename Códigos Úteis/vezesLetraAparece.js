function vezesLetraAparece(frase, letra) {
	let Frase = frase.toLowerCase(); // Esta linha deixa a frase toda em lower case para não haver confusão.
	var quantidade = 0; // Setado como zero pq até então não se sabe quantas letras iguais haverão.
	for (var i = 0; i < Frase.length; i++) {
		if (Frase[i] == letra) {
			/* Se o índice do array frase for igual ao parametro letra, ele itera a variável quantidade.*/
			quantidade++;
		}
	}
	if (quantidade == 0) {
		console.log("Nenhuma correpondência encontrada.");
	} else {
		console.log(
			`A letra ${letra.toUpperCase()} aparece ${quantidade} vezes na frase.`
		);
	}
}
