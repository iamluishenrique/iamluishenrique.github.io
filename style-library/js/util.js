function DataEHora() {
	var data = new Date();
	
	var datacompleta = (("0" + data.getDate()).slice(-2)) + "-" + (("0" + data.getMonth() + 1).slice(-2)) + "-" + data.getFullYear();
	
	datacompleta += " / " + (("0" + data.getHours()).slice(-2)) + ":" + (("0" + data.getMinutes()).slice(-2)) + ":" + (("0" + data.getSeconds()).slice(-2));
	
	$('#horario').text(datacompleta);
	
	//var datahora = document.querySelector("#horario");
	
	//datahora.innerHTML = datacompleta;
	
	setInterval(DataEHora, 500);
}