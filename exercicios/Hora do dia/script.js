var intervald = window.setInterval(() => {
	carregar();
}, 1000); //Atualiza o script a cada 1000 milésimos de segundo.

function carregar() {
	var msg = document.getElementById("msg");
	var img = document.getElementById("imagem");
	var data = new Date();
	var hora = data.getHours();
	var minuto = data.getMinutes();
	var segundo = data.getSeconds();

	msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}.`;
	// var hora = 22;
	if (hora >= 0 && hora < 12) {
		img.scr = "fotomanha.jpg";
		document.body.style.background = "#e2cd9f";
	} else if (hora >= 12 && hora <= 18) {
		img.src = "fototarde.jpg";
		document.body.style.background = "#b9846f";
	} else {
		img.src = "fotonoite.jpg";
		document.body.style.background = "#515154";
	}
}
