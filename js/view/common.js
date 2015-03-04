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
			dishThumbStr += '<img src="images/' + dish["image"] + '" class="dishThumb"/>';
		dishThumbStr += '</div>';
		dishThumbStr += '<div class="dishTitle">';
			dishThumbStr += dish["name"];
		dishThumbStr += '</div>';
	dishThumbStr += '</div>';

	return dishThumbStr;
}

function meinFrame(container, model) {
	appString = '<div class="col-xs-9" id="meinFrame">';
	appString += '</div>';

	container.append(appString);
}