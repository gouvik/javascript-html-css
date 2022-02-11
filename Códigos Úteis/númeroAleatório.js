function obterNumero(min, max) {
	// primeiro o valor menor e depois o maior
	min = Math.ceil(min); // retorna o menor número inteiro maior ou igual a "x".
	max = Math.floor(max); // Função 'floor' retorna o menor número inteiro dentro da função.
	return Math.floor(Math.random() * (max - min)) + min;
}

// inclusivo
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
