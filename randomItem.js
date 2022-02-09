// Programa que escolhe um indice aleatório de um array.

function randomizer(item) {
	let meuItem;
	meuItem = item[Math.floor(Math.random() * item.length)];
	return meuItem;
}

randomizer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
