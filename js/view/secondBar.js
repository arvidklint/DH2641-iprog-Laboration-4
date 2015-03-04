var SecondBar = function(container, model) {
	this.secondBarContents = function(container, model) {
		appString = '<div class="myDinnerSummaryFrame" id="myDinnerSummary">';
			appString += '<div class="row">'
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
		appString += '</div>';

		container.append(appString);
	}

	this.update = function(model, arg) {
		this.secondBarContainer.remove();
		this.secondBarContents(this.container, model);
	}

	this.declareWidgets = function(container) {
		this.container = container;
		this.SecondBarContainer = container.find("#myDinnerSummary");
		this.backButton = container.find("#goBack");
	}

	this.secondBarContents(container, model);
	this.declareWidgets(container);
	controller = new SecondBarController(this, model);
}