function langSet(cn, lang) {
	app.cn = cn;
	app.lang = lang;
	textLoad();
}

function textLoad() {
	httpRequest('assets/lt/'+app.cn+'-'+app.lang+'.txt');
}

function textsShow() {
	for (var ii=0; ii<lt.length; ii++) {
		var node=lt[ii];
		switch(node.mode) {
			case "href":
				var txt=document.getElementById(node.name)
				if (txt) txt.href=node.text;
		        break;
			case "class":
				var txt=document.getElementById(node.name)
				if (txt) txt.className=node.text;
		        break;
			case "classField":
				var txt=eval('document.f1.'+node.name);
				if (txt) txt.className=node.text;
		        break;
			case "placeholder":
				var txt=eval('document.f1.'+node.name);
				if (txt) txt.placeholder=node.text;
		        break;
		    default:
				var txt=document.getElementById(node.name)
				if (txt) txt.innerHTML=node.text;
		} 
	}
	clubsShow();
}

function clubsShow() {
	var cbs=document.getElementById('club');
	if (!cbs) return;
	cbs.options.length = 1;
	for (var ii=0; ii<clubs.length; ii++) {
		var club=clubs[ii];
		var option=document.createElement("option");
		option.text = club.name;
		option.value = club.id;
		cbs.add(option);
	}
}

function httpRequest(uri) {
	js=document.createElement('script');
	js.src=uri;
	js.type='text/javascript';
	oDoc=document.getElementsByTagName('head')[0];
	oDoc.appendChild(js);
}
