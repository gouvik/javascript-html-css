// Programa que simula o Jokenpo! Basta escrever sua ação, uma string com letras minúsculas, chamando a função jokenpo

function jokenpo(acao) {
	// o que o player 1 pratica
	if (acao === "pedra" || acao === "tesoura" || acao === "papel") {
		let oponente = "";
		function randomiza(item) {
			oponente = item[Math.floor(Math.random() * item.length)]; // gera o índice randômico do array
		}

		randomiza(["pedra", "papel", "tesoura"]); // invoca a função com os arrays

		console.log(
			`Você escolheu: ${acao}` + "\n" + `Seu oponente: ${oponente}`
		);

		if (
			(acao === "pedra" && oponente === "tesoura") ||
			(acao === "tesoura" && oponente === "papel") ||
			(acao === "papel" && oponente === "pedra")
		) {
			console.log("Você ganhou!");
		} else if (
			(acao === "pedra" && oponente === "papel") ||
			(acao === "tesoura" && oponente === "pedra") ||
			(acao === "papel" && oponente === "tesoura")
		) {
			console.log("Você perdeu.");
		} else {
			console.log("Empate!");
		}
	} else {
		console.log("Ação inválida, digite novamente.");
	}
}

jokenpo("");
