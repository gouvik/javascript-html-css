function local() {
	navigator.geolocation.getCurrentPosition(
		(res) => {
			this.lat = res.coords.latitude; // dados disponíveis em escopo global.
			this.long = res.coords.longitude; // dados disponíveis em escopo global.
			console.log(lat, long);
		},
		(error) => {
			alert("Não foi possível obter a sua localização.");
		}
	);
}
