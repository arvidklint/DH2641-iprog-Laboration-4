var SecondBar = function(container, model) {
	this.container = container;

	this.secondBarContents = function(container, model) {
		appString = '<div class="row">'
			appString += '<div class="col-xs-6 col-sm-6">';
				//model.setNumberOfGuests(4); // Tillfälligt hårdkodat antal gäster
				appString += 'My Dinner: ' + model.getNumberOfGuests() + ' people';
			appString += '</div>';
			appString += '<div class="col-xs-6 col-sm-6" id="myDinnerSummaryBackButtonFrame">';
				appString += '<button type="button" class="btn" id="goBack">';
				appString += '<span class="glyphicon glyphicon-chevron-left floatLeft"></span>';
				appString += ' Go back and edit dinner';
				appString += '</button>';
			appString += '</div>';
		appString += '</div>';

		container.append(appString);
	}

	this.update = function(model, arg) {
		this.secondBarContainer.empty();
		this.secondBarContents(this.secondBarContainer, model);
		this.declareWidgets(container);
	}

	this.declareWidgets = function(container) {
		this.backButton = container.find("#goBack");
	}

	container.append('<div class="myDinnerSummaryFrame" id="myDinnerSummary"></div>');
	this.secondBarContainer = container.find("#myDinnerSummary");

	this.update(model);
	controller = new SecondBarController(this, model);
}