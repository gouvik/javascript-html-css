// Como variável

let num = 6;
for (let i = 2; i < num; i++) {
	if (num % i === 0) {
		console.log("Não-primo");
	} else if (num > 1) {
		console.log("Primo");
	}
}

// Como função

function numPrimo(num) {
	for (let i = 2; i < num; i++)
		if (num % i === 0) {
			return "Não Primo";
		} else if (num > 1) {
			return "Primo";
		}
}

//

/* A função numeroPrimo vai iterar de 0 até a quantidade de números
e os ehPrimo vai verificar se o mesmo realmente é número primo. */

function numeroPrimo(num) {
	let numeros = [];
	for (var i = 0; i <= num; i++) {
		if (ehPrimo(i)) {
			numeros.push(i);
		}
	}
	return `Os números primos são: ${numeros}`;
}
function ehPrimo(num) {
	for (let i = 2; i < num; i++)
		if (num % i === 0) {
			return false;
		}
	return num > 1;
}
console.log(numeroPrimo(13));
