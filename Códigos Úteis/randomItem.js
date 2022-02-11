// Programa que escolhe um indice aleatório de um array.

function randomizer(item) {
	let meuItem;
	meuItem = item[Math.floor(Math.random() * item.length)];
	return meuItem;
}

randomizer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Programa que escolhe um indice aleatório de um array.

function randomizer(item) {
	let meuItem;
	let conjunto = [];
	for (var i = 0; i < 6; i++) {
		meuItem = item[Math.floor(Math.random() * item.length)]; // gera o indice aleatório do array item.
		conjunto.push(item[i]);
	}
	return meuItem;
}

randomizer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
