var DinnerPreparation = function(container, model) {

	this.dinnerPrepContents = function(container, model) {
		appString = '<div class="container-fluid" id="prepFrame">';
			menu = model.getFullMenu();
			for (var key in menu) {
				dish = menu[key];
				appString += '<div class="row">';
					appString += '<div class="col-xs-4 col-md-3">';
						appString += '<img src="' + dish["ImageURL"] + '" class="img-responsive dinnerPrepThumbnail" alt="Meatballs">';
					appString += '</div>';

					appString += '<div class="col-xs-8 col-md-4">';
						appString += '<h3>';
							appString += dish["Title"];
						appString += '</h3>';

						appString += '<p>';
							appString += dish["Description"];
						appString += '</p>';
					appString += '</div>';

					appString += '<div class="col-xs-12 col-md-5">';
						appString += '<h4>';
							appString += 'PREPARATION';
						appString += '</h4>';

						appString += '<p>';
							appString += dish["Instructions"];
						appString += '</p>';
					appString += '</div>';
				appString += '</div>';
			}
		appString += '</div>';

		container.append(appString);

	}

	// this.update = function(model) {
		
	// }

	this.declareWidgets = function(container) {
		this.container = container;
		this.dinnerPrepContainer = container.find("#prepFrame");
	}

	this.dinnerPrepContents(container, model);
	this.declareWidgets(container);

	//header(container);

	//before();
	//secondBar(model);
	//mainFrame(model);
	//after(container);
}

