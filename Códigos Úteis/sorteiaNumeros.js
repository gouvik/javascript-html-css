function sortearNumeros(numeros) {
	let numerosSorteados = [];

	for (let num = 0; num < 5; num++) {
		let indice = Math.floor(Math.random() * numeros.length);
		numerosSorteados.push(numeros[indice]);
		numeros.splice(indice, 1);
	}

	console.log(numerosSorteados);
}

sortearNumeros([1, 3, 5, 4, 7, 9, 10, 24]);
