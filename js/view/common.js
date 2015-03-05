var appString = "";

function header(container) {
	container.append('<div class="container-fluid" id="header">' + 
		'<span class="title">Homelette</span>' + 
		'<span class="subtitle">From the best chefs in the world directly into your kitchen</span>' + 
		'</div>');
}

// var sidebarAndMain = function(container) {
// 	myDinner(container);
// 	mainFrame(container);
// }

function mainRow(container) {
	appString = '<div class="container-fluid" id="mainContainer">';
		appString += '<div class="row" id="mainRow">';
		appString += '</div>';
	appString += '</div>';
	container.append(appString);
}

function dishThumb(dish) {
	// Tar emot en dish. Returnerar en standardutformad ram med thumbnail och titel. 
	dishThumbStr = '<div class="dishThumbFrame">';
		dishThumbStr += '<div>';
			dishThumbStr += '<img src="' + dish["ImageURL120"] + '" class="dishThumb" width="170" height="150"/>';
		dishThumbStr += '</div>';
		dishThumbStr += '<div class="dishTitle">';
			dishThumbStr += shortenDescription(dish["Title"], 40);
		dishThumbStr += '</div>';
	dishThumbStr += '</div>';

	return dishThumbStr;
}

function meinFrame(container, model) {
	appString = '<div class="col-xs-9" id="meinFrame">';
	appString += '</div>';

	container.append(appString);
}

function shortenDescription(description, maxLength) {
	// Tar emot en beskrivning av en maträtt. Förkortar den till den maximalt tillåtna längden på valsidan.
	if (description.length > maxLength) {
		return description.substr(0,maxLength) + "…";
	} else {
		return description;
	}
}