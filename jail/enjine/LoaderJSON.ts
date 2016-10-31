/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Data {
  export class JSONLoader {
    static Exec(pathFile: string, callback: (data: Array<any>) => any):void {
      var xobj = new XMLHttpRequest();
  		xobj.overrideMimeType("application/json");
  		xobj.open('GET', pathFile, true);
  		xobj.onreadystatechange = function () {
  			if (xobj.readyState == 4 && xobj.status == 200) {
  				if (callback) {
  					callback(JSON.parse(xobj.responseText));
  				}
  			}
  		};
  		xobj.send(null);
    }
  }

}
