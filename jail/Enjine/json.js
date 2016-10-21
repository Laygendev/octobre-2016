/**
Chargement d'un fichier JSON
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

Enjine.JSON = {
	Load: function(jsonPath, callback) {
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', jsonPath, true);
		xobj.onreadystatechange = function () {
			if (xobj.readyState == 4 && xobj.status == "200") {
				if (callback) {
					callback(JSON.parse(xobj.responseText));
				}
			}
		};
		xobj.send(null);
	}
};
