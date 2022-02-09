function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
	if (operacao === "+") {
		return numero + outroNumero;
	} else if (operacao === "-") {
		return numero - outroNumero;
	} else if (
		numero === isNaN(numero) ||
		outroNumero === isNaN(outroNumero) ||
		operacao === undefined ||
		operacao !== "+" ||
		operacao !== "-"
	) {
		return "Preencha todos os valores corretamente!";
	}
}
